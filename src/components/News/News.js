import React from 'react'
import './News.css';
import Navbar from "../Tool/Navbar/Navbar.js";
import Footer from "../Tool/Footer/Footer.js";
import News1 from "../../pictures/1.jpg";
import News2 from "../../pictures/2.png";
import News3 from "../../pictures/3.jpg";
import News4 from "../../pictures/4.jpg";
import News5 from "../../pictures/5.jpg";
import News6 from "../../pictures/6.jpg";
import News7 from "../../pictures/7.jpg";
import News8 from "../../pictures/8.png";

function Contact() {
    return (
        <div className="page-containeer">
        <div className="content-wrap">
          <Navbar />
            <div class='some-page-wrapper-news'>
              <div class='row'>
                <div class='column'>
                  <div class='text-column-news'>
                    <h1>NEWS</h1>
                  </div>
                </div>
              </div>
              <div class='row'>
                <div class='news-column'>
                  <img src={News1} class='pic-column-news' />
                  <div class='text-column-news'>
                  2020.5.7 
                  100周年記念！「FELIX100 by 
                  GASBOOK vol.2」2021春夏
                  Tシャツコレクションを発売！
                  </div>
                </div>
                <div class='news-column'>
                  <img src={News2} class='pic-column-news' />
                  <div class='text-column-news'>
                  2020.2.20
                  フィリックス・ザ・キャットの
                  LINEスタンプ登場！
                  </div>
                </div>
                <div class='news-column'>
                  <img src={News3} class='pic-column-news' />
                  <div class='text-column-news'>
                    2019.12.20
                    FREAK’S STORE100周年記念
                    POP UP SHOPが渋谷をジャック！
                  </div>
                </div>
                <div class='news-column'>
                  <img src={News4} class='pic-column-news' />
                  <div class='text-column-news'>
                    2019.12.20
                    FREAK’S STOREにて100周年記念
                    POP UP SHOP開催中！
                  </div>
                </div>
              </div>
              <div class='row'>
                <div class='news-column'>
                  <img src={News5} class='pic-column-news' />
                  <div class='text-column-news'>
                    2019.12.19
                    セキグチのぬいぐるみや
                    キーチェーンマスコットが新登場！
                  </div>
                </div>
                <div class='news-column'>
                  <img src={News6} class='pic-column-news' />
                  <div class='text-column-news'>
                    2019.9.12
                    GUのTシャツコレクションが
                    新登場！
                  </div>
                </div>
                <div class='news-column'>
                  <img src={News7} class='pic-column-news' />
                  <div class='text-column-news'>
                    2019.8.9
                    [フィリックス100周年記念] テーブル
                    ウェアアイテム登場！ 
                    オンラインストアにて販売中！
                  </div>
                </div>
                <div class='news-column'>
                  <img src={News8} class='pic-column-news' />
                  <div class='text-column-news'>
                    2019.5.17
                    AZUL BY MOUSSYより商品発売！
                  </div>
                </div>
              </div> 
              <div class='row'>
                <div class='column'>
                  <div class='text-column-news'>
                    <button class="button">続きを見る</button>
                  </div>
                </div>
              </div>            
            </div>
          </div>
        <Footer/>
      </div>
    )
}

export default Contact