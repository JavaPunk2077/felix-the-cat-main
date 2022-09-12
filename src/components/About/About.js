import React from 'react';

import Navbar from "../Tool/Navbar/Navbar.js";
import Footer from "../Tool/Footer/Footer.js";
import Felix from "../../pictures/Filix-Ch1.png";
import Professor from "../../pictures/Professor.png";
import Pointexter from "../../pictures/Pointexter.png";
import Rock from "../../pictures/Rock.png";


function App() {
  return (  
    <div className="page-containeer">
          <div className="content-wrap">
          <Navbar />
                      <div class='some-page-wrapper'>
                      <div class='row'>
                          <div class='column'>
                            <div class='text-column'>
                            <h1>キャラクター</h1>
                            </div>
                          </div>
                        </div>
                        <div class='row'>
                          <div class='column'>
                            <div class='pic-size'>
                              <img className="pic-size" src={Felix}  alt="Felix" />
                            </div>
                          </div>
                          <div class='column'>
                            <div class='text-column'>
                            <h1>フィリックス・ザ・キャット(フィリックス)</h1>
                              <p>
                                正義感が強く、怖いもの知らずで冒険好き。エピソード毎に探偵、
                                保安官、花屋、銀行員、トレジャーハンター、さらには
                                プロフェッサーの甥であるポインデクスターのベビーシッター
                                など様々な仕事をしている。宝物であるトリック・バッグ
                                はフィリックスの思い通りに潜水艦や飛行機などに
                                変化する上、フィリックスにしか使いこなすことができない。
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class='row'>
                          <div class='column'>
                            <div class='pic-size'>
                              <img className="pic-size" src={Professor}  alt="Felix" />
                            </div>
                          </div>
                          <div class='column'>
                            <div class='text-column'>
                            <h1>プロフェッサー(大博士)</h1>
                              <p>
                              頭頂部が禿げた白髪白髯で小柄な老人。名前どおり科学者で、
                              いろいろな武器や道具を発明して悪事を働き、
                              またフィリックスの黄色いかばんを奪い取ろうとする。
                              得意の変装でフィリックスを騙すこともある。
                              ポインデクスターのおじでもある。
                              基本的にフィリックスとは仲が悪いが、
                              自分の研究室でポインデクスターにイタズラされることを恐れ、
                              ベビーシッターとして彼を雇うこともある。
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class='row'>
                          <div class='column'>
                            <div class='pic-size'>
                              <img className="pic-size" src={Pointexter}  alt="Felix" />
                            </div>
                          </div>
                          <div class='column'>
                            <div class='text-column'>
                            <h1>ポインデクスター(豆博士)</h1>
                              <p>
                              子供ながらにIQ222の天才科学者で、
                              プロフェッサーの甥っ子。フィリックスと仲がよい。
                              善人ではあるが研究熱心なあまり、
                              結果的に悪人に手を貸すこともある。
                              登場回数は多くない。シリーズによってはプロフェッサーとともに
                              フィリックスの黄色いかばんを奪うのを手伝うこともある。
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class='row'>
                          <div class='column'>
                            <div class='pic-size'>
                              <img className="pic-size" src={Rock}  alt="Felix" />
                            </div>
                          </div>
                          <div class='column'>
                            <div class='text-column'>
                            <h1>ロック・ボトム(ロック)</h1>
                              <p>
                              ブルドッグのような犬を擬人化した巨漢の悪人。
                              プロフェッサーの手下になって悪いことをする。
                              フィリックスの家の隣に住んでいるエピソードも存在する。
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
          </div>
          <Footer/>
    </div>
  );
}

export default App;
