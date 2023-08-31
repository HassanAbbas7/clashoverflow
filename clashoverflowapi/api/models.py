from django.db import models
from django.contrib.auth.models import AbstractUser
from .manager import UserManager


class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=14)
    last_name = models.CharField(max_length=14)
    password = models.CharField(max_length=200)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(auto_now_add=True) #auto_now = True if you want to add a field like "updated_on"
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    objects = UserManager()
