from django.contrib import admin
from django.urls import path
from . import views
from django.urls import include
from . import api
urlpatterns=[
    path('',views.index,name='index'),
    path('api/',include('company.api.urls')),
    path('contact/',api.views.ContactList.as_view({'post':'create'})),
]