from django.urls import path
from django.contrib.auth import views as auth_views

from .forms import LoginForm
from .views import download_exhibit, edit_object, signup, recover_password, recover_edit_password, invalid_recovering_email, recover_code, wrong_verification_code, profile, marker_upload, object_upload, create_artwork, create_exhibit, edit_artwork, element_get, edit_exhibit, edit_profile, edit_password, delete

urlpatterns = [
    path('signup/', signup, name='signup'),
    path('login/', auth_views.LoginView.as_view(
        template_name='users/login.jinja2',
        authentication_form=LoginForm,
    ), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('recover/', recover_password, name='recover'),
    path('recover-code/', recover_code, name='recover-code'),

    path('profile/', profile, name='profile'),
    path('profile/edit/', edit_profile, name="edit-profile"),
    path('profile/edit-password/', edit_password, name="edit-password"),
    path('wrong-verification-code', wrong_verification_code, name="wrong-verification-code"),
    path('invalid-recovering-email', invalid_recovering_email, name="invalid-recovering-email"),
    path('recover-edit-password', recover_edit_password, name="recover-edit-password"),

    path('markers/upload/', marker_upload, name='marker-upload'),
    path('objects/upload/', object_upload, name='object-upload'),
    path('element/get/', element_get, name='element-get'),

    path('objects/edit/', edit_object, name='edit-object'),

    path('artworks/create/', create_artwork, name='create-artwork'),
    path('artworks/edit/', edit_artwork, name="edit-artwork"),
    
    path('exhibits/create/', create_exhibit, name='create-exhibit'),
    path('exhibits/edit/', edit_exhibit, name='edit-exhibit'),
    path('download-exhibit', download_exhibit, name="download-exhibit"),

    path('content/delete/', delete, name='delete-content'),
]
