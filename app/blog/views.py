from django.shortcuts import render
from .utils import searchPosts, paginatePosts
# Create your views here.


def blog(request):
    posts, search_query = searchPosts(request)

    custom_range, posts = paginatePosts(request, posts, 4)

    context = {'posts': posts, 'search_query': search_query, 'custom_range': custom_range}
    return render(request, 'pages/blog.html', context)


def post_details(request):
    context = {}
    return render(request, 'pages/blog_detail.html', context)
