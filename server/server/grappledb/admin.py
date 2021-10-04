from django.contrib import admin
from .models import Move

class GrappleAdmin(admin.ModelAdmin):
    list_display = ("name", "position", "type", "video_url")

# Register Model

admin.site.register(Move, GrappleAdmin)