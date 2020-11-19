from django.db import models
from datetime import datetime
from django.dispatch import receiver
from django.db.models.signals import post_save, post_delete
import urllib

class Artwork2(models.Model):
    name = models.CharField(unique=True, max_length=50)
    patt = models.CharField(default="hiro", max_length=50)
    gif = models.CharField(default="peixe", max_length=50)
    scale = models.CharField(default="1 1", max_length=50)
    position = models.CharField(default="0 0 0", max_length=50)
    rotation = models.CharField(default="270 0 0", max_length=50)

class Exhibit(models.Model):
    owner = models.ForeignKey('users.Profile',on_delete=models.DO_NOTHING,related_name="exhibits")
    name = models.CharField(unique=True, max_length=50)
    slug = models.CharField(unique=True, max_length=50)
    artworks = models.ManyToManyField('users.Artwork',related_name="exhibits")
    creation_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    @property
    def artworks_count(self):
        return self.artworks.count()

    @property
    def date(self):
        return self.creation_date.strftime("%d/%m/%Y")

class Marker(models.Model):
    owner = models.ForeignKey('users.Profile', on_delete=models.DO_NOTHING, related_name="markers")
    source = models.ImageField(upload_to='markers/')
    uploaded_at = models.DateTimeField(auto_now=True)
    author = models.CharField(max_length=60, blank=False)
    title = models.CharField(max_length=60, default='')
    patt = models.FileField(upload_to='patts/')

    def __str__(self):
        return self.source.name

    @property
    def artworks_count(self):
        return Artwork.objects.filter(marker=self).count()

    @property
    def artworks_list(self):
        return Artwork.objects.filter(marker=self)

    @property
    def exhibits_count(self):
        from .models import Exhibit
        return Exhibit.objects.filter(artworks__marker=self).count()

    @property
    def exhibits_list(self):
        from .models import Exhibit
        return Exhibit.objects.filter(artworks__marker=self)

    @property
    def in_use(self):
        if self.artworks_count > 0 or self.exhibits_count > 0:
            return True
        return False

@receiver(post_delete, sender=Marker)
def remove_source_file(sender, instance, **kwargs):
    instance.source.delete(False)