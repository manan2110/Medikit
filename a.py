import json

items = []
json_data = open("frontend/src/res.json")
data1 = json.load(json_data)
for i in data1["nearby_pharmacies"]:
    items.extend(i["items"])
