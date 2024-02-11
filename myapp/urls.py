from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('count/', views.count, name='count'),
    path('get-data/', views.get_data, name='get-data'),
    path('add-p1/', views.update_member, name='update-member')
]