from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Item(models.Model):
    image_url = models.URLField()
    name = models.CharField(max_length=255)
    amount = models.IntegerField()
    price = models.FloatField()
    retail_price = models.FloatField()


class Pharmacy(models.Model):
    name = models.CharField(max_length=255)
    image_url = models.URLField()
    owner = models.ForeignKey(User, blank=True, on_delete=models.SET_NULL, null=True)
    items = models.ManyToManyField(Item, blank=True)
    address = models.TextField()


class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    cart_json = models.JSONField()
