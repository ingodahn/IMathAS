<?php

include_once("conversion.php");

?>

<html>
<head>
    <title>Conversion Test</title>    
    <style>
        .sr-only {
position: absolute;
right: 0px;
top: 0px;
width: 1px;
height: 1px;
overflow: hidden;
color: transparent;
}
    </style>
</head>
<body>
    <?php


    echo "Detect Conversion file version: ".conversionVer()."<br/><br/>";

    echo "Detect language: ".conversion_detectlanguage()."<br/><br/>";

    //echo conversionDisplay2HTML(conversionDisplay("Casks",conversionLiquid("C",0,8)))."<br/>";

    echo conversionDisplay2HTMLwithBorder(conversionPrefix())."<br/>";

    echo conversionDisplay2HTML(conversionDisplay("Abbreviations",conversionAbbreviations("T")
                                                , "Time Conversions",conversionTime("1")
                                                , "Time Conversions",conversionTime()))."<br/>";

    echo conversionDisplay2HTML(conversionDisplay("Abbreviations",conversionFormulaAbbreviations("C")
                                                , "Circle Formulas",conversionFormulaGeometry("C","`")
                                                , "Abbreviations",conversionFormulaAbbreviations("T")
                                                , "Triangle Formulas",conversionFormulaGeometry("T","`")
                                                , "Abbreviations",conversionFormulaAbbreviations("R")
                                                , "Rectangle Formulas",conversionFormulaGeometry("R","`")))."<br/>";

    echo conversionDisplay2HTML(conversionDisplay("Abbreviations",conversionFormulaAbbreviations("S")
                                                , "Square Formulas",conversionFormulaGeometry("S","`")
                                                , "Abbreviations",conversionFormulaAbbreviations("A")
                                                , "Surface Area Formulas",conversionFormulaGeometry("A","`")
                                                , "Abbreviations",conversionFormulaAbbreviations("V")
                                                , "Volume Formulas",conversionFormulaGeometry("V","`")))."<br/>";

    // --------------------------------------------------------------------------------------------------------------------
    // Temperature --------------------------------------------------------------------------------------------------------
    echo conversionDisplay2HTML(conversionDisplay("Temperature",conversionFormulaAbbreviations("F")
                                                , "Temperature to Fahrenheit",conversionFormulaTemperature("F","y")
                                                , "Temperature to Celsius",conversionFormulaTemperature("C","y")
                                                , "Temperature to Kelvin",conversionFormulaTemperature("K","y")))."<br/>";

    // --------------------------------------------------------------------------------------------------------------------
    // Length -------------------------------------------------------------------------------------------------------------
    echo conversionDisplay2HTML(conversionDisplay("Metric Length Definitions",conversionAbbreviations("M","L")
                                                , "US Length Definitions", conversionAbbreviations("A","L")
                                                , "Metric Length Conversions", conversionLength("M",0,3,"~","y")
                                                , "US Length Conversions", conversionLength("A",0,3,"~","y")
                                                , "Metric to US Length Conversions", conversionLength("MA",0,3,"~","y")
                                                , "US to Metric Length Conversions", conversionLength("AM",0,3,"~","y")))."<br/>";

    //// --------------------------------------------------------------------------------------------------------------------
    //// Capacity -----------------------------------------------------------------------------------------------------------
    echo conversionDisplay2HTML(conversionDisplay("Metric Capacity Definitions",conversionAbbreviations("M","C")
                                                , "US Capacity Definitions",conversionAbbreviations("A","C")
                                                , "Metric Capacity Conversions",conversionCapacity("M",0,3,"~","y")
                                                , "US Capacity Conversions",conversionCapacity("A",0,3,"~","y")
                                                , "Metric to US Capacity Conversions",conversionCapacity("MA",0,3,"~","y")
                                                , "US to Metric Capacity Conversions",conversionCapacity("AM",0,3,"~","y")))."<br/>";
    //// --------------------------------------------------------------------------------------------------------------------
    //// Weight -------------------------------------------------------------------------------------------------------------
    echo conversionDisplay2HTML(conversionDisplay("Metric Mass Definitions",conversionAbbreviations("M","M")
                                                , "US Weight Definitions",conversionAbbreviations("A","M")
                                                , "Metric Mass Conversions",conversionWeight("M",0,3,"~")
                                                , "US Weight Conversions",conversionWeight("A",0,3,"~")
                                                , "Metric to US Weight/Mass Conversions",conversionWeight("MA",0,3,"~","y")
                                                , "US to Metric Weight/Mass Conversions",conversionWeight("AM",0,3,"~","y")))."<br/>";
    //// --------------------------------------------------------------------------------------------------------------------
    //// Area ---------------------------------------------------------------------------------------------------------------
    echo conversionDisplay2HTML(conversionDisplay("Metric Area Definitions",conversionAbbreviations("M","A","y")
                                                , "US Area Definitions",conversionAbbreviations("A","A","y")
                                                , "Metric Area Conversions",conversionArea("M",0,3,"y","~")
                                                , "US Area Conversions",conversionArea("A",0,3,"y","~")
                                                , "Metric to US Area Conversions",conversionArea("MA",0,3,"y","~")
                                                , "US to Metric Area Conversions",conversionArea("AM",0,3,"y","~")))."<br/>";
    //// --------------------------------------------------------------------------------------------------------------------
    //// Volume -------------------------------------------------------------------------------------------------------------
    echo conversionDisplay2HTML(conversionDisplay("Metric Volume Definitions",conversionAbbreviations("M","V","y")
                                                , "US Volume Definitions",conversionAbbreviations("A","V","y")
                                                , "Metric Volume Conversions",conversionVolume("M",0,3,"y")
                                                , "US Volume Conversions",conversionVolume("A",0,3,"y")
                                                , "Metric to US Volume Conversions",conversionVolume("MA",0,3,"y","~")
                                                , "US to Metric Volume Conversions",conversionVolume("AM",0,3,"y","~")))."<br/>";

    ?>
</body>
</html>