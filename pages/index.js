import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>hbb
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          30歳からjavascriptを始めました!
          <br />
          IT業界に挑戦したい31歳です（2022/7/12時点）
          <br />
          7/8からNext.jsを勉強始めました。このサイトもNext.jsです。
          <br />
          Typescriptの勉強もしたいと思っています。
          <br />
          未熟者ですが、なにとぞよろしくお願いいたします。
        </p>
        <p>
          <a href="https://qiita.com/hallotallo">Qiita</a>も始めました（まだ2つしか投稿はありません）。
        </p>
        <h2>制作物</h2>
        <div className={utilStyles.cardContainer}>
          <section className={utilStyles.card}>
            <div className={utilStyles.cardContent}>
              <h1 className={utilStyles.cardTitle}>Chatアプリ</h1>
              <p className={utilStyles.cardText}>
                仕様技術:react、firebase（リアルタイムデータベース）、MUI<br/>
                内容:シンプルなチャットアプリです。reactとfirebaseの練習のために作成しました。
              </p>
            </div>
            <div className={utilStyles.cardLink}>
              <a href="https://idobata-ham-chat.web.app/">Website</a>
              <a href="https://github.com/vell39mq/idobata-ham-chat">Github</a>
            </div>
          </section>
          <section className={utilStyles.card}>
            <div className={utilStyles.cardContent}>
              <h1 className={utilStyles.cardTitle}>独り言アプリ</h1>
              <p className={utilStyles.cardText}>
              仕様技術:react、firebase（auth、firestore）<br/>
              内容:ユーザー認証と連動するCRUD操作の練習ために作成しました。
              </p>
            </div>
            <div className={utilStyles.cardLink}>
              <a href="https://nd-blog-project-2ef01.web.app/">Website</a>
              <a href="https://github.com/vell39mq/react-blog">Github</a>
            </div>
          </section>
          <section className={utilStyles.card}>
            <div className={utilStyles.cardContent}>
              <h1 className={utilStyles.cardTitle}>お手製画像縮小.py</h1>
              <p className={utilStyles.cardText}>
              仕様技術:python<br/>
              内容:仕事のパソコンでフリーソフトのインストールが禁止されていたので、自分で画像一括縮小コードを書きました。
              </p>
            </div>
            <div className={utilStyles.cardLink}>
              <a href="http://webcreatorbox.com/about">Github</a>
            </div>
          </section>
        </div>

      </section>
    </Layout>
  );
}
