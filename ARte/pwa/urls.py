from django_distill import distill_url
from .views import service_worker, index


def get_index():
    return None


urlpatterns = [
    distill_url('', index, 
                name='index',
                distill_func=get_index,
                # / is not a valid file name! override it to index.html
                distill_file='index.html'),

    distill_url('sw.js', service_worker,
                name='sw', distill_func=get_index,
                distill_file='sw.js')
]
