const icons = {
  react: "/icons/react.svg",
  query: "/icons/react-query.svg",
  formik: "/icons/formik.svg",
  javascript: "/icons/javascript.svg",
  typescript: "/icons/typescript.svg",
  redux: "/icons/redux.svg",
  saga: "/icons/saga.svg",
  node: "/icons/nodejs.svg",
  scss: "/icons/scss.svg",
  tailwind: "/icons/tailwindcss.svg",
  css: "/icons/css.svg",
  html: "/icons/html.svg",
  router: "/icons/react-router.svg",
  postman: "/icons/postman.svg",
  ubuntu: "/icons/ubuntu.svg",
  linux: "/icons/linux.svg",
  githubColored: "/icons/github-octocat.svg",
  openLayers: "/icons/openlayers.svg",
  ionic: "/icons/ionic.svg",
  nginx: "/icons/nginx.svg",
  jira: "/icons/jira.svg",
  json: "/icons/json.svg",
  mongo: "/icons/mongo.svg",
  express: "/icons/express.svg",
  firebase: "/icons/firebase.svg",
  styleGuide: "/icons/styleguidist.svg",
  testing: "/icons/testing.svg",
  material: "/icons/material.svg",
  linkedIn: "/icons/linkedin.svg",
  github: "/icons/github.svg",
  twitter: "/icons/twitter.svg",
  mail: "/icons/mail.svg",
  chevronRight: "/icons/chevron-right.svg",
  vscode: "/images/vscode.png",
  signature: "/images/signature.png",
  npmBg: "/images/npm.png",
  naest: "/images/naest.png",
  evieeTech: "/images/eviee-tech.png",
};

export const getIcon = (iconKey: keyof typeof icons) => {
  const path = icons[iconKey];

  return path;
};
