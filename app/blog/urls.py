from django.urls import path
from . import views


urlpatterns = [

    path('', views.blog, name='blog'),
    path('blog/', views.post_details, name='post_details'),
]
