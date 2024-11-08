import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PageBanner from "../Shared/PageBanner/PageBanner";

import image from "../../assets/banner/CFC_banner.jpg";
import { Slide } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const steps = [
  "Daily Transportation (in km)",
  "Home Energy Consumption (in kwh)",
  "Dietary Habits (1 for veg/ 0 for no-veg)",
  "Waste & Recycling  (in kg)",
  "Water Usage (in liter)",
];

const emissionFactors = {
  transportation: 0.21, // kg CO₂ per km for car, assuming only car use
  energyElectricity: 0.233, // kg CO₂ per kWh
  energyGas: 0.2, // kg CO₂ per kWh
  dietVegetarian: 1.7, // tons CO₂ per year
  dietNonVegetarian: 2.5, // tons CO₂ per year
  waste: 0.08, // kg CO₂ per kg waste
  wasteRecycling: -0.04, // kg CO₂ per kg recycled waste
  waterUsage: 0.000298, // kg CO₂ per liter
};

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [formData, setFormData] = React.useState({
    transportation: "",
    energyConsumption: "",
    diet: "",
    waste: "",
    waterUsage: "",
  });

  const fields = [
    "transportation",
    "energyConsumption",
    "diet",
    "waste",
    "waterUsage",
  ];
  const handleInputChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setFormData({ ...formData, [fields[activeStep]]: value });
  };
  console.log(formData);

  // setFormData({[fields[activeStep]]: ''})

  const carbonFootprintAdvice = [
    {
      range: 10, // tons threshold for high impact
      impactLevel: "High Impact",
      advice: [
        "Switch to a Plant-Based Diet: Reduce meat and dairy consumption, focusing on locally grown produce.",
        "Invest in Energy-Efficient Appliances: Opt for ENERGY STAR-rated appliances and LED lighting.",
        "Limit Air Travel: Choose train or bus for short trips or consider carbon offsets if you must fly.",
        "Switch to Renewable Energy: If possible, switch to solar, wind, or hydro power for your home.",
        "Drive Less: Carpool, use public transport, or switch to a fuel-efficient or electric vehicle.",
      ],
    },
    {
      range: 5, // tons threshold for moderate impact
      impactLevel: "Moderate Impact",
      advice: [
        "Use Public Transport: Opt for buses, trains, or carpooling instead of driving alone.",
        "Adopt Energy-Saving Habits: Unplug electronics when not in use, use energy-saving settings, and reduce heating and cooling.",
        "Reduce Food Waste: Plan meals, compost, and avoid excessive packaging.",
        "Consider an Electric Vehicle: Explore fuel-efficient or hybrid vehicles if car ownership is essential.",
      ],
    },
    {
      range: 0, // tons threshold for low impact
      impactLevel: "Low Impact",
      advice: [
        "Adopt a Plant-Based Diet: Increase plant-based meals and reduce animal product consumption.",
        "Continue Energy Efficiency Practices: Maintain low-energy habits, like unplugging devices and using efficient appliances.",
        "Encourage Sustainable Choices in Community: Share your practices and engage others in eco-friendly habits.",
        "Limit Non-Essential Purchases: Focus on buying what you need and choosing sustainable or second-hand options.",
      ],
    },
  ];

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    // setFormData({ [fields[activeStep]]: '' })
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData({
      transportation: "",
      energyConsumption: "",
      diet: "",
      waste: "",
      waterUsage: "",
    });
  };

  const transportEmissions =
    formData.transportation * emissionFactors.transportation; // kg CO₂
  const energyEmissions =
    formData.energyConsumption * emissionFactors.energyElectricity; // kg CO₂
  const dietEmissions =
    emissionFactors[
      formData.diet === 1 ? "dietVegetarian" : "dietNonVegetarian"
    ] * 1000; // kg CO₂
  const wasteEmissions = formData.waste * emissionFactors.waste; // kg CO₂
  const waterEmissions = formData.waterUsage * emissionFactors.waterUsage; // kg CO₂

  // Total emissions in tons
  const totalEmissions = transportEmissions
    ? (transportEmissions +
        energyEmissions +
        dietEmissions +
        wasteEmissions +
        waterEmissions) /
      1000
    : 0; // Convert kg to tons

  console.log(totalEmissions);
  const adviceCategory =
    carbonFootprintAdvice.find((advice) => totalEmissions > advice.range) ||
    carbonFootprintAdvice[2]; // Default to lowest category

  return (
    <div>
      <PageBanner image={image} pageName={"Carbon Footprint Calculator"} />

      <div className="max-w-[85rem] mx-auto">
        <div className="border p-10 rounded-xl">
          <Box>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                // if (isStepOptional(index)) {
                //     labelProps.optional = (
                //         <Typography variant="caption">Optional</Typography>
                //     );
                // }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length ? (
              <Slide in={activeStep === steps.length} direction="up">
                <Box sx={{ mt: 4, textAlign: "center" }}>
                  <CheckCircleIcon
                    color="success"
                    sx={{ fontSize: 50, mb: 1 }}
                  />
                  <Typography variant="h6" gutterBottom>
                    All steps completed - you're finished!
                  </Typography>
                  <div className="my-10 text-2xl font-bold">
                    {totalEmissions.toFixed(2)} tons CO<sub>2</sub>
                  </div>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleReset}
                    sx={{ mt: 2 }}
                  >
                    Reset
                  </Button>
                </Box>
              </Slide>
            ) : (
              <React.Fragment>
                {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
                <div className="my-12">
                  <label className="block mb-2 text-lg font-medium text-gray-900 ">
                    {steps[activeStep]}
                  </label>
                  <input
                    onChange={handleInputChange}
                    // value={formData[Object.keys(formData)[activeStep]]}
                    // name='number'
                    type="number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-xl p-2.5 "
                    placeholder="1000"
                    required
                  />
                </div>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  {isStepOptional(activeStep) && (
                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                      Skip
                    </Button>
                  )}
                  <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </div>

        {activeStep === steps.length ? (
          <div className="border p-10 rounded-xl my-5">
            <h1 className="text-center text-2xl font-bold">
              Your Carbon Footprint
            </h1>
            <p className="text-center mt-5 text-xl">
              Based on your inputs, your annual carbon footprint is
              approximately:
            </p>
            <h3 className="text-center text-4xl mt-10 font-bold text-teal-900">
              {totalEmissions.toFixed(2)} tons CO<sub>2</sub>{" "}
            </h3>
            <div className="mt-5 text-lg">
              <p className="">
                Here are some suggestions to reduce your carbon footprint:
              </p>
              <ul className="pl-10">
                {adviceCategory.advice.map((advice, index) => (
                  <li key={index} className="list-disc pt-3">
                    {advice}{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="hidden"></div>
        )}
      </div>
    </div>
  );
}
