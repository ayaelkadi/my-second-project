export const ARTICLE_PER_PAGE = 6;

const PRODUCTION_DOMAIN = "https://my-second-project-zigj.vercel.app/";
const DEVELOPMENT_DOMAIN = "http://localhost:3003";

export const DOMAIN = process.env.NODE_ENV === 'production' 
    ? PRODUCTION_DOMAIN
    : DEVELOPMENT_DOMAIN;