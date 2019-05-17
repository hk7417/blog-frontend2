import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ListPage, PostPage, EditorPage, NotFoundPage } from 'pages';
//import  ListPage  from 'pages/ListPage';
//import  PostPage  from 'pages/PostPage';
//import  Editor  from './Editor';
//import  NotFoundPage  from 'pages/NotFoundPage';
//components에 page를 만든 이유는 여기서 모듈을 불러올 때 기본 주소가 src가 아니라 src/components가 되어서.
//어떻게 src로 바꿔야 하는지 모르겠음.
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ListPage}/>
        <Route path="/page/:page" component={ListPage}/>
        <Route path="/tag/:tag/:page?" component={ListPage}/>
        <Route path="/post/:id" component={PostPage}/>
        <Route path="/editor" component={EditorPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  );
};

export default App;