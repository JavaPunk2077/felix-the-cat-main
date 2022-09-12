import React from 'react';
import './Home.css';
import Navbar from "../Tool/Navbar/Navbar.js";
import Footer from "../Tool/Footer/Footer.js";
import Button from "../Tool/Button/Button.js";
import Felix from "../../pictures/Felix-Main.png";
  

function Home(){
    return(
               <div className="page-containeer">
                <div className="content-wrap">
                  <Navbar />
                  <div class='some-page-wrapper'>
                      <div class='row'>
                        <div class='column'>
                          <div>
                           <img className="pic-size" src={Felix}  alt="Felix" />
                          </div>
                        </div>
                        <div class='column'>
                          <div>
                              <h1>フィリックス・ザ・キャット</h1>
                              <p>
                              世界で最も有名な黒猫「フィリックス・ザ・キャット」
                              は1919年に映画の主人公として誕生し、日本では
                              1980年代に一大ブームを起こしました。コミックス
                              やアニメーション、そして商品を通じ、彼の名前の由来
                              である「フェリシアス=幸福を招くネコ」として、
                              どんな状況にあっても諦めない不屈の精神と、
                              周囲への大いなる優しさを発揮し、
                              世界中で活躍し続けています。2019年に100周年を迎えます。
                              </p>
                              <div>
                              <Button />
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>
          </div>
          <Footer/>
      </div>
  );
}

export default Home;