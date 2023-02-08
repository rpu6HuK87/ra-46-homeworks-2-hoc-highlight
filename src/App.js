import React, {useState} from 'react'
import {withNewOrPopular} from './hoc/withNewOrPopular'

function Article(props) {
  return (
    <div className="item item-article">
      <h3>
        <a href={props.url}>{props.title}</a>
      </h3>
      <p className="views">Прочтений: {props.views}</p>
    </div>
  )
}

function Video(props) {
  return (
    <div className="item item-video">
      <iframe
        title={props.url}
        src={props.url}
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  )
}

const NewOrPopularVideo = withNewOrPopular(Video)
const NewOrPopularArticle = withNewOrPopular(Article)

function List(props) {
  // eslint-disable-next-line
  return props.list.map((item, ind) => {
    // eslint-disable-next-line
    switch (item.type) {
      case 'video':
        return <NewOrPopularVideo {...item} key={ind} />

      case 'article':
        return <NewOrPopularArticle {...item} key={ind} />
    }
  })
}

export default function App() {
  const [list] = useState([
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      views: 50
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      views: 12
    },
    {
      type: 'article',
      title: 'Невероятные события в неизвестном поселке...',
      views: 175
    },
    {
      type: 'article',
      title: 'Секретные данные были раскрыты!',
      views: 1532
    },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      views: 4253
    },
    {
      type: 'article',
      title: 'Кот Бегемот обладает невероятной...',
      views: 12
    }
  ])

  return <List list={list} />
}
