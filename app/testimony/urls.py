from django.urls import path
from . import views

urlpatterns = [

    path('', views.testimony, name='testimonies'),
    path('testimonies/<slug:slug>/', views.test_details, name='test_details'),
]
