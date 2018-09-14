from django.urls import path
from .views import index
from django_distill import distill_url

def get_index():
    return None

urlpatterns = [
    distill_url('', index, 
                name='index',
                distill_func=get_index,
                # / is not a valid file name! override it to index.html
                distill_file='index.html'),
]