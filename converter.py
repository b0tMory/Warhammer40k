import pandas as pd
import json
import os

base_dir = os.path.dirname(os.path.abspath(__file__))
csv_file = os.path.join(base_dir, "Unit Names.csv")

army_units = {}

# Read CSV, skip first 5 rows so row 6 (army names) is visible
df = pd.read_csv(csv_file, header=None, skiprows=5)

# Loop over columns in groups of 3 (ArmyName, Units, Shape)
for col_idx in range(0, df.shape[1], 3):
    army_name = df.iloc[0, col_idx]  # Army name in row 6
    if pd.isna(army_name):
        continue

    army_name = str(army_name).strip().upper()

    # Units start 2 rows down (row 8 in Excel after skiprows)
    unit_col = df.iloc[2:, col_idx].dropna().tolist()
    shape_col = df.iloc[2:, col_idx+2].dropna().tolist() if col_idx+2 < df.shape[1] else []  # Changed from col_idx+1 to col_idx+2

    # Pair units with their shapes
    units_with_shapes = []
    for i, unit in enumerate(unit_col):
        unit_name = str(unit).strip()
        shape = str(shape_col[i]).strip() if i < len(shape_col) and str(shape_col[i]).strip() != 'nan' else ""
        if unit_name:
            units_with_shapes.append({
                "name": unit_name,
                "shape": shape  # Changed from "base" to "shape"
            })

    army_units[army_name] = units_with_shapes

# Save JSON
json_file = os.path.join(base_dir, "army_units.json")
with open(json_file, "w", encoding="utf-8") as f:
    json.dump(army_units, f, indent=4, ensure_ascii=False)

print(f"✅ Converted {csv_file} → {json_file}")
print(f"📊 Processed {len(army_units)} armies")

# Print sample for verification
for army_name, units in list(army_units.items())[:2]:  # Show first 2 armies
    print(f"\n{army_name} sample:")
    for unit in units[:3]:  # Show first 3 units
        print(f"  - {unit['name']}: {unit['shape'] if unit['shape'] else 'No shape'}")