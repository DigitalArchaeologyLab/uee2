from django.contrib import admin

# Register your models here.
from .models import BasicPage

class BasicPageAdmin(admin.ModelAdmin):
  list_display = ("title", "slug")

admin.site.register(BasicPage, BasicPageAdmin)
