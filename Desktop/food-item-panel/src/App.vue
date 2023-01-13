<template>
  <div>
    <form>
      <label>Name:</label>
      <input v-model="foodItem.name" type="text" />
      <br />
      <label>Time:</label>
      <select v-model="foodItem.time">
        <option value=""></option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snack">Snack</option>
      </select>
      <br />
      <label>Type:</label>
      <select v-model="foodItem.type">
        <option value=""></option>
        <option value="american">American</option>
        <option value="asian">Asian</option>
        <option value="european">European</option>
        <option value="mexican">Mexican</option>
        <option value="middle_eastern">Middle Eastern</option>
        <option value="south_american">South American</option>
        <option value="italian">Italian</option>
        <option value="indian">Indian</option>
        <option value="mediterranean">Mediterranean</option>
        <option value="african">African</option>
        <option value="caribbean">Caribbean</option>
        <option value="cajun">Cajun</option>
        <option value="chinese">Chinese</option>
        <option value="french">French</option>
        <option value="greek">Greek</option>
        <option value="japanese">Japanese</option>
        <option value="korean">Korean</option>
        <option value="thai">Thai</option>
        <option value="vietnamese">Vietnamese</option>
      </select>
      <br />
      <label>Calories:</label>
      <input v-model="foodItem.calories" type="number" />
      <br />
      <label>Carbohydrates (g):</label>
      <input v-model="foodItem.macro.carbohydrates.total" type="number" />
      <br />
      <label>Sugars (g):</label>
      <input v-model="foodItem.macro.carbohydrates.sugars" type="number" />
      <br />
      <label>Added Sugars (g):</label>
      <input v-model="foodItem.macro.carbohydrates.added_sugars" type="number" />
      <br />
      <label>Protein (g):</label>
      <input v-model="foodItem.macro.protein" type="number" />
      <br />
      <label>Fat (g):</label>
      <input v-model="foodItem.macro.fat.total" type="number" />
      <br />
      <label>Saturated Fat (g):</label>
      <input v-model="foodItem.macro.fat.saturated" type="number" />
      <br />
      <label>Trans Fat (g):</label>
      <input v-model="foodItem.macro.fat.trans" type="number" />
      <br />
      <label>Fiber (g):</label>
      <input v-model="foodItem.macro.fiber" type="number" />
      <br />
      <label>Sodium (mg):</label>
      <input v-model="foodItem.macro.sodium" type="number" />
      <br />
      <label>Cholesterol (mg):</label>
      <input v-model="foodItem.macro.cholesterol" type="number" />
      <br />
      <label>Calcium (mg):</label>
      <input v-model="foodItem.macro.calcium" type="number" />
      <br />
      <label>Potassium (mg):</label>
      <input v-model="foodItem.macro.potassium" type="number" />
      <br />
      <label>Iron (mg):</label>
      <input v-model="foodItem.macro.iron" type="number" />
      <br />
      <label>Gluten:</label>
      <input v-model="foodItem.allergens.gluten" type="checkbox" />
      <br />
      <label>Peanuts:</label>
      <input v-model="foodItem.allergens.peanuts" type="checkbox" />
      <br />
      <label>Shellfish:</label>
      <input v-model="foodItem.allergens.shellfish" type="checkbox" />
      <br />
      <label>Tree Nuts:</label>
      <input v-model="foodItem.allergens.tree_nuts" type="checkbox" />
      <br />
      <label>Wheat:</label>
      <input v-model="foodItem.allergens.wheat" type="checkbox" />
      <br />
      <label>Soy:</label>
      <input v-model="foodItem.allergens.soy" type="checkbox" />
      <br />
      <label>Milk:</label>
      <input v-model="foodItem.allergens.milk" type="checkbox" />
      <br />
      <label>Eggs:</label>
      <input v-model="foodItem.allergens.eggs" type="checkbox" />
      <br />
      <label>Fish:</label>
      <input v-model="foodItem.allergens.fish" type="checkbox" />
      <br />
      <button type="button" @click="submitFoodItem">Submit</button>
    </form>
    <div>
      <h3>JSON Preview</h3>
      <br />
      <code>{{ foodItem }}</code>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      foodItem: {
        name: "",
        type: "",
        time: "",
        calories: 0,
        macro: {
          carbohydrates: { total: 0, added_sugars: 0 },
          protein: 0,
          fat: { total: 0, saturated: 0, trans: 0 },
          fiber: 0,
          sodium: 0,
          cholesterol: 0,
          calcium: 0,
          potassium: 0,
          iron: 0,
        },
        allergens: {
          gluten: false,
          peanuts: false,
          shellfish: false,
          tree_nuts: false,
          wheat: false,
          soy: false,
          milk: false,
          eggs: false,
          fish: false,
        },
      },
    };
  },
  methods: {
    async submitFoodItem() {
      try {
        await axios.post("/api/fooditems", this.foodItem);
        alert("Food item successfully added to the database!");
        this.foodItem = {
          name: "",
          type: "",
          time: "",
          calories: 0,
          macro: {
            carbohydrates: { total: 0, sugars: 0, added_sugars: 0 },
            protein: 0,
            fat: { total: 0, saturated: 0, trans: 0 },
            fiber: 0,
            sodium: 0,
            cholesterol: 0,
            calcium: 0,
            potassium: 0,
            iron: 0,
          },
          allergens: {
            gluten: false,
            peanuts: false,
            shellfish: false,
            tree_nuts: false,
            wheat: false,
            soy: false,
            milk: false,
            eggs: false,
            fish: false,
          },
        };
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

