#!/usr/bin/env bash

while getopts "p:w" option; do
  case $option in
    p)
      PACKAGE=${OPTARG}
      ;;
    w)
      WAIT=true
      ;;
  esac
done

ORG="ngx-kit"
PKG_DIR="dist/${PACKAGE}"
BUILD_REPO="${PACKAGE}-builds"
REPO_URL="git@github.com:${ORG}/${BUILD_REPO}.git"
REPO_DIR="tmp/${BUILD_REPO}"
BRANCH="test"

echo "Pushing build artifacts to ${BUILD_REPO}"

rm -rf $REPO_DIR
mkdir -p $REPO_DIR
(
  cd $REPO_DIR && \
  git init && \
  git remote add origin $REPO_URL && \
  # use the remote branch if it exists
  if git ls-remote --exit-code origin ${BRANCH}; then
    git fetch origin ${BRANCH} --depth=1 && \
    git checkout origin/${BRANCH}
  fi
  git checkout -b "${BRANCH}"
)

# copy over build artifacts into the repo directory
rm -rf $REPO_DIR/*
cp -R $PKG_DIR/* $REPO_DIR/

# replace README
cp ./BUILD_README.md "$REPO_DIR/README.md"

# commit & push
SHORT_SHA=`git rev-parse --short HEAD`
COMMIT_MSG=`git log --oneline -1`
COMMITTER_USER_NAME=`git --no-pager show -s --format='%cN' HEAD`
COMMITTER_USER_EMAIL=`git --no-pager show -s --format='%cE' HEAD`
BUILD_VER="${BRANCH}+${SHORT_SHA}"
(
  cd $REPO_DIR && \
  git config user.name "${COMMITTER_USER_NAME}" && \
  git config user.email "${COMMITTER_USER_EMAIL}" && \
  git add --all && \
  git commit -m "${COMMIT_MSG}" --quiet && \
  git tag "${BUILD_VER}" && \
  git push origin "${BRANCH}" --tags --force
)

NPM_LINK="${ORG}/${BUILD_REPO}#${BUILD_VER}"
echo "Build published: ${NPM_LINK}"

echo "${NPM_LINK}" > "${REPO_DIR}/npm_link"

if [ "$WAIT" = true ]; then
  read -p "Press any key to continue... " -n1 -s
fi
