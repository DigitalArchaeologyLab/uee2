from django.contrib import admin

# Register your models here.
from .models import GlossaryTerm


class GlossaryAdmin(admin.ModelAdmin):
    list_display = ["term_eng", "term_ar", "definition_eng"]


admin.site.register(GlossaryTerm, GlossaryAdmin)
