from django.contrib import admin
from treebeard.admin import TreeAdmin
from treebeard.forms import movenodeform_factory

### Register and setup models ###

from .models import Activity


class ActivityAdmin(admin.ModelAdmin):
    list_display = ("type", "places", "start", "end")

    def places(self, obj):
        return "\n".join([l.name_eng for l in obj.associatedPlace.all()])

    def start(self, obj):
        return "\n".join([p.name_eng for p in obj.startPeriod.all()])

    def end(self, obj):
        return "\n".join([p.name_eng for p in obj.endPeriod.all()])


admin.site.register(Activity, ActivityAdmin)


from .models import Period


class PeriodAdmin(TreeAdmin):
    form = movenodeform_factory(Period)
    list_display = ("name_eng", "start", "end")

    fieldsets = [
        (
            "General information",
            {
                "fields": [
                    "name_eng",
                    "altnames_eng",
                    "name_ar",
                    "altnames_ar",
                    "start",
                    "end",
                ]
            },
        ),
        (
            "Hierarchical position",
            {
                "fields": ["_position", "_ref_node_id"],
                "description": "If this is the top-level period, select 'Child of' and then root. If this is a sub-level period, select 'Child of' and then the period this falls within.",
            },
        ),
    ]


admin.site.register(Period, PeriodAdmin)

from .models import Place


class PlaceAdmin(TreeAdmin):
    form = movenodeform_factory(Place)

    fieldsets = [
        (
            "Place name(s) and notes",
            {"fields": ["name_eng", "altnames_eng", "name_ar", "altnames_ar", "notes"]},
        ),
        (
            "Type of place",
            {
                "fields": ["isRegion", "isGovernate", "isNome", "isSite", "isFeature"],
                "description": "Select the appropriate type(s) for this place.",
            },
        ),
        (
            "Spatial data",
            {
                "fields": ["lat", "lon", "geojson"],
                "description": "Enter the latitude and longitude in decimal degrees (i.e. 24.0878429703, 32.8882169724). For polygons, use the Geojson field. NOTE: polygons are not currently supported but will be in the future.",
            },
        ),
        (
            "Hierarchical position",
            {
                "fields": ["_position", "_ref_node_id"],
                "description": "If this is the top-level place, select 'Child of' and then root. If this is a sub-level place, select 'Child of' and then the place this falls within.",
            },
        ),
    ]


admin.site.register(Place, PlaceAdmin)
