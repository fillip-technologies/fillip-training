// src/pages/CoursePage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import CourseTemplate from "../../modules/CourseTemplate/CourseTemplate";
import UIUXContent from "../../modules/uiux/UIUXContent";
import GraphicsContent from "../../modules/graphics/GraphicsContent";
import FullStackContent from "../../modules/fullstack/FullStackContent";
import BackendContent from "../../modules/backend/BackendContent";
import FrontendContent from "../../modules/frontend/FrontendContent";
import DigitalMarketingContent from "../../modules/digital/DigitalMarketingContent";
import SEOContent from "../../modules/seo/SeoContent";
import GoogleAdsContent from "../../modules/googleads/GoogleAdsContnet";
import BusinessAnalyticsContent from "../../modules/businessanalytics/BusinessAnalytics";
import MobileAppContent from "../../modules/mobileappdevelopment/mobileappdevelopment";
import CyberContent from "../../modules/cyber/CyberContent";
import CloudContent from "../../modules/cloud/CloudContent";
import CyberSecurityContent from "../../modules/cybersecurity/CyberSecurityContent";


export default function CoursePage() {
    const { courseSlug } = useParams();

    const COURSE_MAP = {
        // uiux
        uiux: UIUXContent,
        "ui-ux": UIUXContent,

        // graphics
        graphics: GraphicsContent,
        "graphic-design": GraphicsContent,
        "graphics-designing": GraphicsContent,

        // fullstack
        fullstack: FullStackContent,
        "full-stack": FullStackContent,
        "full-stack-development": FullStackContent,
        "mern-development": FullStackContent,
        "fullstack-development-company-in-patna": FullStackContent,


        // frontend
        frontend: FrontendContent,
        "frontend-development": FrontendContent,
        "frontend-course": FrontendContent,
        "web-design-course": FrontendContent,
        "frontend-development-training-company-in-patna": FrontendContent,
        "frontend-webdevlopment-internship-company-in-patna": FrontendContent,

        // backend
        backend: BackendContent,
        "backend-development": BackendContent,
        "backend-course": BackendContent,
        "nodejs-course": BackendContent,
        "node-js": BackendContent,
        "backend-training": BackendContent,
        "nodejs-backend": BackendContent,
        "express-backend": BackendContent,
        "server-side-development": BackendContent,
        "backend-development-company-in-patna": BackendContent,
        "backend-training-company-in-patna": BackendContent,

        // digital marketing
        digitalmarketing: DigitalMarketingContent,
        "digital-marketing": DigitalMarketingContent,
        "digital-marketing-course": DigitalMarketingContent,
        "digital-marketing-training": DigitalMarketingContent,
        "dm-course": DigitalMarketingContent,
        "marketing-course": DigitalMarketingContent,
        "online-marketing-course": DigitalMarketingContent,
        "performance-marketing": DigitalMarketingContent,
        "performance-marketing-course": DigitalMarketingContent,
        "growth-marketing": DigitalMarketingContent,
        "growth-marketing-course": DigitalMarketingContent,
        "learn-digital-marketing": DigitalMarketingContent,

        // Seo
        seo: SEOContent,
        "seo-course": SEOContent,
        "search-engine-optimization": SEOContent,
        "seo-training": SEOContent,
        "learn-seo": SEOContent,
        "seo-masterclass": SEOContent,

        // google ads
        googleads: GoogleAdsContent,
        "google-ads": GoogleAdsContent,
        "google-ads-course": GoogleAdsContent,
        "google-ads-training": GoogleAdsContent,
        "google-adwords": GoogleAdsContent,
        "adwords-course": GoogleAdsContent,
        "ppc-course": GoogleAdsContent,
        "ppc-training": GoogleAdsContent,
        "google-ppc": GoogleAdsContent,
        "learn-google-ads": GoogleAdsContent,

        // business analytics
        businessanalytics: BusinessAnalyticsContent,
        "business-analytics": BusinessAnalyticsContent,
        "business-analytics-course": BusinessAnalyticsContent,
        "business-analytics-training": BusinessAnalyticsContent,
        "ba-course": BusinessAnalyticsContent,
        "ba-training": BusinessAnalyticsContent,
        "analytics-course": BusinessAnalyticsContent,
        "analytics-training": BusinessAnalyticsContent,
        "data-analytics-basics": BusinessAnalyticsContent,
        "learn-business-analytics": BusinessAnalyticsContent,
        "business-intelligence-course": BusinessAnalyticsContent,


        // mobile app development
        mobile: MobileAppContent,
        "mobile-app": MobileAppContent,
        "mobile-app-development": MobileAppContent,
        "flutter-development": MobileAppContent,
        "flutter-course": MobileAppContent,
        "android-development": MobileAppContent,
        "android-app-course": MobileAppContent,
        "app-development": MobileAppContent,
        "mobile-development": MobileAppContent,

        // cyber security
        cyber: CyberSecurityContent,
        "cyber-security": CyberSecurityContent,
        "cybersecurity": CyberSecurityContent,
        "ethical-hacking": CyberSecurityContent,
        "ethical-hacking-course": CyberSecurityContent,
        "cyber-security-course": CyberSecurityContent,
        "cyber-training": CyberSecurityContent,
        "penetration-testing": CyberSecurityContent,
        "cyber-analyst-course": CyberSecurityContent,


        // cloud
        cloud: CloudContent,
        "cloud-computing": CloudContent,
    };

    const data = COURSE_MAP[courseSlug];

    if (!data) return <div className="p-20 text-center">Course not found.</div>;

    return <CourseTemplate data={data} />;
}
