from django.urls import path,include
from company.api import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('contactapi',views.ContactModelViewSet,basename='contact')

urlpatterns = [
    path('',include(router.urls)),
]