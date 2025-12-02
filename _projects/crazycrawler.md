---
layout: page
title: CrazyCrawler
description: Web search engine with scraping and crawling capabilities built with Django, MySQL, and Android app
img: https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800&q=80
importance: 8
category: github
github: https://github.com/junayed-hasan/CrazyCrawler
---

## Overview

A **full-stack web search engine** that enables users to scrape and crawl data from websites. Built using **Django** framework with HTML, CSS, JavaScript, and MySQL database. Includes an **Android mobile app** built with Android Studio for on-the-go web scraping.

💻 **GitHub**: [CrazyCrawler](https://github.com/junayed-hasan/CrazyCrawler)  
🌐 **Features**: Web Scraping, Indexing, Search, Mobile App  
🏗️ **Stack**: Django, MySQL, Android

## Key Features

✅ **Web Crawler**: Automated website crawling with configurable depth  
✅ **Data Scraper**: Extract structured data from web pages  
✅ **Search Engine**: Index and search scraped content  
✅ **User Dashboard**: Manage scraping jobs and view results  
✅ **Android App**: Mobile client for remote scraping control  
✅ **Scheduled Crawls**: Cron jobs for periodic data collection

## Architecture

```
User Input (URL) → Django Backend → Crawler Engine
                                            ↓
                                    BeautifulSoup/Scrapy
                                            ↓
                                    Data Extraction
                                            ↓
                                    MySQL Database
                                            ↓
                                    Indexing (Whoosh/Elasticsearch)
                                            ↓
                                    Search Interface
```

## Tech Stack

**Backend**: Django, Python, Celery (async tasks)  
**Frontend**: HTML, CSS, JavaScript, Bootstrap  
**Database**: MySQL, Redis (caching)  
**Scraping**: BeautifulSoup, Scrapy, Selenium  
**Mobile**: Android (Java), Retrofit (API client)  
**Deployment**: Docker, Nginx, Gunicorn

## Use Cases

- **Research**: Academic data collection
- **Market Intelligence**: Competitor analysis
- **Price Monitoring**: E-commerce price tracking
- **Content Aggregation**: News and blog aggregation

---

**Status**: Completed  
**Type**: Full-Stack Web + Mobile  
**License**: MIT
