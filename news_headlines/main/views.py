from django.shortcuts import render
from newsapi import NewsApiClient
import json

API_KEY = 'ENTER YOUR API KEY'

# Create your views here.
def news(requests):
    newsapi = NewsApiClient(api_key=API_KEY)

    top_headlines = newsapi.get_top_headlines(sources='google-news-in, the-hindu ,bbc-news, the-verge, techcrunch')
    articles = top_headlines['articles']
    return render(requests, 'news.html',{Data:articles})
