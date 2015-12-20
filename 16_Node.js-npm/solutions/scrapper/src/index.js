import request from 'request';
import cheerio from 'cheerio';
import bluebird from 'bluebird';

import {HACKER_NEWS_HOST, SECTIONS, PAGES} from './config';



const page = ({section = SECTIONS.NEWS, page = PAGES.FIRST} = {}) => {
  return new Promise((resolve, reject) => {
    request({url: `${HACKER_NEWS_HOST}/${section}?p=${page}`}, (err, req, body) => {
      if(err){
        return reject(err);
      }

      const $ = cheerio.load(body);
      resolve(
        $('span.comhead').map(
          (index, span) => {
            const $link = $(span).prev();
            return {title: $link.text(), href: $link.attr('href')};
          }
        ).get()
      );
    });
  });
}

const detail = ({title, subtitle}) => Promise.resolve({title, subtitle})

export default {
  page,
  detail
};
