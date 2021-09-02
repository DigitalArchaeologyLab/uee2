from django.contrib import admin

# Register your models here.
from .models import GlossaryTerm


class GlossaryAdmin(admin.ModelAdmin):
    list_display = ["name_eng"]


admin.site.register(GlossaryTerm, GlossaryAdmin)
