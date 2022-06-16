import React, { Component } from "react";
import educationPageStyles from "./EducationPage.module.css";
import ImageSlider from "./imageSlider";
import NewsCard from "./NewsCard";
import ChartSection from "./ChartSection";
// import Layout from '../../../components/news/Layout'





export default class EducationPage extends Component {
  render() {
    return (
        <>
      <div className={educationPageStyles["container"]}>
        <div className={educationPageStyles["one"]}>
          <ImageSlider />
        </div>
        <div className={educationPageStyles["two"]}>
          <div className={educationPageStyles["newsSection"]}>
            <NewsCard 
            newsTitle="از کجا شروع کنم" 
            newsSub="راهنمای جامع پرورش طیور مسیر راه کارآفرین های جدید" 
            newsImg="/images/start.png" />
            <NewsCard 
            newsTitle=" بیماری های طیور" 
            newsSub="آشنایی با بیماری های رایج طیور و راه های پیشگیری" 
            newsImg="/images/virus.png" />
            <NewsCard 
            newsTitle=" فارم های صنعتی" 
            newsSub="طراحی و اجرا , تجهیز و هوشمند سازی فارم های پرورشی" 
            newsImg="/images/farm.png" />
            <NewsCard 
            newsTitle="طرح های توجیحی" 
            newsSub="کسب و کارهای موفق و توجیه های اقتصادی" 
            newsImg="/images/user.png" />
            <NewsCard 
            newsTitle="کارآفرینی های مرتبط " 
            newsSub="  ایده صدها کسب و کار سود ده در زمینه پرورش" 
            newsImg="/images/idea.png" />
          </div>
          <div className={educationPageStyles["chartSection"]}>
            <ChartSection />

          









        <div>
          <div className={educationPageStyles["mediaSection"]}>
            <div className={educationPageStyles["leftSide"]}>
            <video autoPlay loop muted src={'./videos/auto.mp4'} type="video/mp4" />
            </div>
            <div className={educationPageStyles["rightSide"]}>
              <h1>همیشه حداکثر راندمان</h1>
              <p>   پک کامل افزایش راندمان بصورت سخت افزار و نرم افزاری با مدیریت هوشمند.این پک شامل  سنسور های مانیتورینگ , کنترل پنل اجرایی ,نرم افزارهای تخصصی پرورش طیور و ....که برای انواع نژادها برنامه ریزی شده است و باعث می شود سالن های پرورشدهندگان همیشه با توجه به ایده آل نژاد شرایط را کنترل کند. </p>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}
