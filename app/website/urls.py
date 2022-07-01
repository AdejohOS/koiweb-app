from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),

    path('sermons/', views.sermons, name='messages'),
    path('sermons/<slug:slug>/', views.sermon_details, name='message_details'),

    path('contact/', views.contact, name='contact'),
    path('give/', views.give, name='give'),
    path('radio/', views.radio, name='radio'),

    path('about/', views.about, name='about'),

    path('begin/', views.begin, name='begin'),
]
