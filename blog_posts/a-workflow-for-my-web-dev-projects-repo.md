---
id: "a-workflow-for-my-web-dev-projects-repo"
title: "A Workflow for my Web Dev Projects Repo"
date: "2021-12-08"
tags: ["GitHub", "GitHub Actions", "Web Development"]
description: "A workflow which automatically adds information about the project like it's name, preview image and a try-it link from a `data.json` file to the `README.md` as an HTML table cell. Also adds a little `Download` button at the end of the `README.md` in case someone wants to download the repo as a zip file."
---

[Instructions]: # "To submit to the GitHub Actions x DEV Hackathon 2021, please fill out all sections."

Whenever I add new projects to my [web-dev-practice](https://github.com/utkarsh1311/web-dev-practice) repository, it is a pain to add the information about the project manually to the README of the repo.

### My Workflow

[Note]: # (Please make sure the project links to the appropriate GitHub Actions repository, and includes [an open source license](https://choosealicense.com/) and README.)
That's why I created a workflow which automatically adds information about the project like it's **name**, **preview image** and a **try-it** link from a `data.json` file to the `README.md` as an HTML table cell. Also adds a little `Download` button at the end of the `README.md` in case someone wants to download the repo as a zip file.
I am using the [Json2Table](https://github.com/marketplace/actions/json2table) action from [EddieHub](https://github.com/EddieHubCommunity) and [readme-download-button-action](https://github.com/DenverCoder1/readme-download-button-action).
Here is the `YAML` file :-

```yml
on: push
jobs:
  table:
    runs-on: ubuntu-latest
    name: Update README from json data
    steps:
      - uses: actions/checkout@v2
      - name: Read/Write data into README
        uses: eddiejaoude/github-actions-reader-writer@v0.1
        with:
          json-file-path: "data.json"
          github-token: ${{ secrets.GITHUB_TOKEN }}
          columns: 3
          object-field-names: '[ "tryItLink", "projectName", "imageUrl", "description" ]'
          html-cell: '<td align="center"><div style="display:flex; flex-direction: column;"><h2>{{ projectName }}</h2><img src="{{ imageUrl }}" /><h3>{{ description }}</h3><h3><a href="{{ tryItLink }}">Try It</a></h3></div></td>'
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Get latest release
        id: get-latest-release
        uses: InsonusK/get-latest-release@v1.0.1
        with:
          myToken: ${{ github.token }}
          view_top: 1

      - name: Readme Download Button Action
        env:
          GITHUB_USER: "utkarsh1311"
          REPO: "web-dev-practice"
          FORMAT: "zip"
          VERSION: "${{ steps.get-latest-release.outputs.tag_name }}"
          COLOR: "blue"
          BEGIN_TAG: "<!-- BEGIN LATEST DOWNLOAD BUTTON -->"
          END_TAG: "<!-- END LATEST DOWNLOAD BUTTON -->"
        run: |
          UPDATE=$(cat README.md | perl -0777 -pe 's#(${{ env.BEGIN_TAG }})(?:.|\n)*?(${{ env.END_TAG }})#${1}\n[![Download ${{ env.FORMAT }}](https://custom-icon-badges.herokuapp.com/badge/-Download-${{ env.COLOR }}?style=for-the-badge&logo=download&logoColor=white "Download ${{ env.FORMAT }}")](https://github.com/${{ env.GITHUB_USER }}/${{ env.REPO }}/archive/${{ env.VERSION }}.${{ env.FORMAT }})\n${2}#g')
          echo "${UPDATE}" > README.md

      - uses: EndBug/add-and-commit@v7
        with:
          message: "docs(readme): Bump download button version to ${{ steps.get-latest-release.outputs.tag_name }}"
          default_author: github_actions
          branch: main
```

And this is what my `README.md` looks like :-

![README of web-dev-practice repo](https://cdn.hashnode.com/res/hashnode/image/upload/v1638956099731/ZOWu-ucla.png)

### Submission Category:

Wacky Wildcards
[Note]: # (Maintainer Must-Haves, DIY Deployments, Interesting IoT, Phone Friendly, or Wacky Wildcards)

### Yaml File or Link to Code

Here is the the repo which uses my workflow :- https://github.com/utkarsh1311/web-dev-practice
and this is link to the `yml` file : https://github.com/utkarsh1311/web-dev-practice/blob/main/.github/workflows/main.yml

### Additional Resources / Info

#### My experience

Learned a lot about GitHub actions. How they work, what events can trigger a workflow, how to use different action in the same workflow. Overall, It was a great learning experience.
