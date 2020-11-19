from django.contrib import admin
from users.models import Artwork, Profile
from core.models import  Object

admin.site.register(Artwork)
admin.site.register(Profile)
admin.site.register(Object)