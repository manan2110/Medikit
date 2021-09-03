from django.urls import path
from . import views

urlpatterns = [
    path("", views.index),
    path("pharmacy/", views.pharmacy),
    path("pharmacy/<str:pharmacy_eloc>/", views.pharmacy),
    path("pharmacy/<str:pharmacy_eloc>/update",views.update)
    path("cart/", views.cart),
]
