import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const [datas, setDatas] = useState([]);

  const { path } = useParams();
  const [list, setList] = useState(0);
  const [loadingList, setLoadingList] = useState(false);
  const [loadingDatas, setLoadingDatas] = useState(false);

  useEffect(() => {
    const fetchList = async () => {
      try {
        setLoadingList(true);
        const { data } = await axios.get(
          `https://dud-backend.onrender.com/api/list/${path}`
        );
        setList(data);
        setLoadingList(false);
      } catch (error) {
        console.log(error);
        setLoadingList(false);
      }
    };
    fetchList();
  }, [path]);
  useEffect(() => {
    const fetchDatas = async () => {
      try {
        setLoadingDatas(true);
        const { data } = await axios.get("/api/home");
        setDatas(data);
        setLoadingDatas(false);
      } catch (error) {
        console.log(error);
        setLoadingDatas(false);
      }
    };
    fetchDatas();
  }, []);
  console.log("list", list && list);
  console.log("datas", datas && datas);
  return (
    <div className="details">
      {loadingList ? (
        <p>Loading</p>
      ) : (
        list && (
          <div className="details__details-card">
            <div
              className="dc-thumbnail"
              style={{
                background: `url(${
                  list && list.thumbnail
                })center/cover no-repeat`,
              }}
            ></div>
            <div className="dc-details-container">
              <div className="dc-big-title-dl-btn">
                <h1>{list.title}</h1>
                {/* <button className='dc-download-btn'>
                  <span style={{ marginRight: '6px' }}>
                    <i className='fa-solid fa-circle-arrow-down'></i>
                  </span>{' '}
                  Download
                </button> */}
              </div>
              <p className="dc-author">
                {list.info ? list.info["Author(s)"] : ""}
              </p>
              <p className="dc-description">
                {list.info ? list.info.Description : ""}
              </p>
              <div className="dc-btn-container">
                <Link
                  to={`/${path}/chapter/1`}
                  className="dc-btn-start-reading"
                >
                  Start Reading
                </Link>
                <div className="dc-btn-favorite">
                  <span style={{ marginRight: "6px" }}>
                    <i className="fa-solid fa-heart-circle-plus"></i>
                  </span>{" "}
                  Favorite
                </div>
              </div>
            </div>
          </div>
        )
      )}
      <div className="details__episodes-featured-container">
        <div className="details__episodes-card">
          <div className="dec-big-title">Episode List</div>
          <div className="dec-list-data">
            {loadingList ? (
              <p>Loading</p>
            ) : (
              list &&
              list.chapters.map((c) => (
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/${c.url}/chapter/${c.text.replace(/\D/g, "")}`}
                  className="dec-data-btn"
                >{`Chapter ${c.text.replace(/\D/g, "")}`}</Link>
              ))
            )}
          </div>
        </div>
        <div className="details__featured-card">
          <div className="dfc-header">
            <div className="dfc-title">Featured</div>
            <a href="/#" className="dfc-more">
              More{" "}
              <span>
                <i className="fa-solid fa-chevron-right"></i>
              </span>
            </a>
          </div>
          <div className="dfc-content-list">
            {loadingDatas ? (
              <>
                {" "}
                <div className="dfc-item ">
                  <div
                    className="dfc-item-thumb at-item"
                    style={{
                      opacity: "0.2",
                      background: "rgba(0,0,0,0.2)",
                    }}
                  ></div>
                  <div className="dfc-item-details">
                    <div className="dfc-item-title"></div>
                    <div className="dfc-item-content-wrapper">
                      <span className="dfc-cat"></span>
                      <span className="dfc-ep-num"></span>
                    </div>
                  </div>
                </div>
                <div className="dfc-item">
                  <div
                    className="dfc-item-thumb at-item"
                    style={{
                      opacity: "0.1",
                      background: "rgba(0,0,0,0.1)",
                    }}
                  ></div>
                  <div className="dfc-item-details">
                    <div className="dfc-item-title"></div>
                    <div className="dfc-item-content-wrapper">
                      <span className="dfc-cat"></span>
                      <span className="dfc-ep-num"></span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              datas &&
              datas.map((d) => (
                <Link to={`/details/${d.path}`} className="dfc-item">
                  <div
                    className="dfc-item-thumb"
                    style={{
                      background: `url(${d.itemBanner})center/cover no-repeat`,
                    }}
                  ></div>
                  <div className="dfc-item-details">
                    <div className="dfc-item-title">{d.title}</div>
                    <div className="dfc-item-content-wrapper">
                      <span className="dfc-cat">Fantasy</span>
                      <span className="dfc-ep-num">{list.chapters.length}</span>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
