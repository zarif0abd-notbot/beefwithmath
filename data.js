// data.js — beefwithmath.com | All PDF structure data
// Update this file to add new content. Never touch index.html.

const DATA = {

  subjects: {
    FM:  { label: "Further Mechanics",        color: "#ff6b1a", icon: "⚙️", papers: [31,32,33], extra2025: 34 },
    FP1: { label: "Further Pure Maths 1",     color: "#ffe135", icon: "∑",  papers: [11,12,13], extra2025: 14 },
    FP2: { label: "Further Pure Maths 2",     color: "#3dff8a", icon: "∫",  papers: [21,22,23], extra2025: 24 },
    FS:  { label: "Further Statistics",       color: "#00d4ff", icon: "σ",  papers: [41,42,43], extra2025: 44 }
  },

  chapters: {
    FM:  ["Circular motion","Equilibrium of a rigid Body","Hookes law",
          "Linear motion under a variable Force","Momentum","Motion of a projectile"],
    FP1: ["Matrices","Polar coordinates","Proof by induction",
          "Rational functions and graphs","Roots of polynomial equations",
          "Summation of series","Vectors"],
    FP2: ["Complex numbers","Differential equations","Differentiation",
          "Hyperbolic functions","Integration","Matrices"],
    FS:  ["Chi-squared tests","Continuous random variables",
          "Inference using normal and t-distributions",
          "Non-parametric tests","Probability generating functions"]
  },

  sessions: {
    MAYJUNE: {
      label: "MAY / JUNE",
      folderCode: "s",
      baseFolder: "MAYJUNE",
      years: ["2021 mayjune","2022 mayjune","2023 mayjune","2024 mayjune","2025 mayjune"],
      topical: {
        "2021 mayjune": {
          FM:  { "Circular motion":4,"Equilibrium of a rigid Body":2,"Hookes law":2,
                 "Linear motion under a variable Force":2,"Momentum":2,"Motion of a projectile":2 },
          FP1: { "Matrices":2,"Polar coordinates":2,"Proof by induction":2,
                 "Rational functions and graphs":2,"Roots of polynomial equations":2,
                 "Summation of series":2,"Vectors":2 },
          FP2: { "Complex numbers":3,"Differential equations":4,"Differentiation":2,
                 "Hyperbolic functions":4,"Integration":4,"Matrices":3 },
          FS:  { "Continuous random variables":2,"Inference using normal and t-distributions":4,
                 "Non-parametric tests":2,"Probability generating functions":2,"Chi-squared tests":2 }
        },
        "2022 mayjune": {
          FM:  { "Circular motion":3,"Equilibrium of a rigid Body":3,"Hookes law":2,
                 "Linear motion under a variable Force":2,"Momentum":2,"Motion of a projectile":2 },
          FP1: { "Matrices":2,"Polar coordinates":2,"Proof by induction":1,
                 "Rational functions and graphs":3,"Roots of polynomial equations":2,
                 "Summation of series":2,"Vectors":2 },
          FP2: { "Complex numbers":2,"Differential equations":4,"Differentiation":3,
                 "Hyperbolic functions":1,"Integration":4,"Matrices":2 },
          FS:  { "Continuous random variables":2,"Inference using normal and t-distributions":4,
                 "Non-parametric tests":2,"Probability generating functions":2,"Chi-squared tests":2 }
        },
        "2023 mayjune": {
          FM:  { "Circular motion":2,"Equilibrium of a rigid Body":2,"Hookes law":2,
                 "Linear motion under a variable Force":2,"Momentum":2,"Motion of a projectile":2 },
          FP1: { "Matrices":2,"Polar coordinates":2,"Proof by induction":2,
                 "Rational functions and graphs":2,"Roots of polynomial equations":2,
                 "Summation of series":2,"Vectors":2 },
          FP2: { "Complex numbers":2,"Differential equations":4,"Differentiation":2,
                 "Hyperbolic functions":2,"Integration":2,"Matrices":3 },
          FS:  { "Continuous random variables":2,"Inference using normal and t-distributions":2,
                 "Non-parametric tests":2,"Probability generating functions":2,"Chi-squared tests":2 }
        },
        "2024 mayjune": {
          FM:  { "Circular motion":2,"Equilibrium of a rigid Body":2,"Hookes law":2,
                 "Linear motion under a variable Force":2,"Momentum":2,"Motion of a projectile":2 },
          FP1: { "Matrices":3,"Polar coordinates":2,"Proof by induction":2,
                 "Rational functions and graphs":2,"Roots of polynomial equations":2,
                 "Summation of series":2,"Vectors":2 },
          FP2: { "Complex numbers":2,"Differential equations":2,
                 "Differentiation":["1,2.pdf","2,3.pdf","4.pdf"],
                 "Hyperbolic functions":["1(a).pdf","2.pdf","3.pdf"],
                 "Integration":4,"Matrices":2 },
          FS:  { "Continuous random variables":2,"Inference using normal and t-distributions":2,
                 "Non-parametric tests":2,"Probability generating functions":2,"Chi-squared tests":2 }
        },
        "2025 mayjune": {
          FM:  { "Circular motion":6,"Equilibrium of a rigid Body":3,"Hookes law":3,
                 "Linear motion under a variable Force":3,"Momentum":3,"Motion of a projectile":3 },
          FP1: { "Matrices":4,"Polar coordinates":3,"Proof by induction":3,
                 "Rational functions and graphs":3,"Roots of polynomial equations":3,
                 "Summation of series":3,"Vectors":3 },
          FP2: { "Complex numbers":4,"Differential equations":6,"Differentiation":4,
                 "Hyperbolic functions":3,"Integration":5,"Matrices":4 },
          FS:  { "Continuous random variables":3,"Inference using normal and t-distributions":6,
                 "Non-parametric tests":3,"Probability generating functions":3,"Chi-squared tests":3 }
        }
      }
    },
    OCTNOV: {
      label: "OCT / NOV",
      folderCode: "w",
      baseFolder: "OCTNOV",
      years: ["2021 octnov","2022 octnov","2023 octnov","2024 octnov","2025 octnov"],
      topical: {
        "2021 octnov": {
          FM:  { "Circular motion":2,"Equilibrium of a rigid Body":2,"Hookes law":2,
                 "Linear motion under a variable Force":2,"Momentum":2,"Motion of a projectile":2 },
          FP1: { "Matrices":2,"Polar coordinates":2,"Proof by induction":2,
                 "Rational functions and graphs":2,"Roots of polynomial equations":2,
                 "Summation of series":2,"Vectors":2 },
          FP2: { "Complex numbers":2,"Differential equations":2,"Differentiation":2,
                 "Hyperbolic functions":3,"Integration":2,"Matrices":3 },
          FS:  { "Continuous random variables":2,"Inference using normal and t-distributions":2,
                 "Non-parametric tests":2,"Probability generating functions":2,"Chi-squared tests":2 }
        },
        "2022 octnov": {
          FM:  { "Circular motion":4,"Equilibrium of a rigid Body":2,"Hookes law":2,
                 "Linear motion under a variable Force":2,"Momentum":3,"Motion of a projectile":2 },
          FP1: { "Matrices":2,"Polar coordinates":2,"Proof by induction":2,
                 "Rational functions and graphs":2,"Roots of polynomial equations":2,
                 "Summation of series":2,"Vectors":2 },
          FP2: { "Complex numbers":2,"Differential equations":4,"Differentiation":5,
                 "Hyperbolic functions":1,"Integration":5,"Matrices":4 },
          FS:  { "Continuous random variables":2,"Inference using normal and t-distributions":4,
                 "Non-parametric tests":2,"Probability generating functions":2,"Chi-squared tests":2 }
        },
        "2023 octnov": {
          FM:  { "Circular motion":3,"Equilibrium of a rigid Body":2,"Hookes law":2,
                 "Linear motion under a variable Force":2,"Momentum":2,"Motion of a projectile":2 },
          FP1: { "Matrices":2,"Polar coordinates":2,"Proof by induction":2,
                 "Rational functions and graphs":2,"Roots of polynomial equations":2,
                 "Summation of series":2,"Vectors":2 },
          FP2: { "Complex numbers":2,"Differential equations":3,"Differentiation":2,
                 "Hyperbolic functions":5,"Integration":2,"Matrices":3 },
          FS:  { "Chi-squared tests":2,"Continuous random variables":2,
                 "Inference using normal and t-distributions":3,
                 "Non-parametric tests":2,"Probability generating functions":2 }
        },
        "2024 octnov": {
          FM:  { "Circular motion":2,"Equilibrium of a rigid Body":2,"Hookes law":2,
                 "Linear motion under a variable Force":2,"Momentum":2,"Motion of a projectile":2 },
          FP1: { "Matrices":2,"Polar coordinates":2,"Proof by induction":2,
                 "Rational functions and graphs":2,"Roots of polynomial equations":2,
                 "Summation of series":2,"Vectors":2 },
          FP2: { "Complex numbers":2,"Differential equations":4,"Differentiation":2,
                 "Hyperbolic functions":2,"Integration":6,"Matrices":3 },
          FS:  { "Chi-squared tests":2,"Continuous random variables":2,
                 "Inference using normal and t-distributions":4,
                 "Non-parametric tests":2,"Probability generating functions":2 }
        },
        "2025 octnov": {
          FM:  { "Circular motion":4,"Equilibrium of a rigid Body":3,"Hookes law":3,
                 "Linear motion under a variable Force":3,"Momentum":3,"Motion of a projectile":5 },
          FP1: { "Matrices":3,"Polar coordinates":3,"Proof by induction":3,
                 "Rational functions and graphs":3,"Roots of polynomial equations":3,
                 "Summation of series":3,"Vectors":3 },
          FP2: { "Complex numbers":4,"Differential equations":6,"Differentiation":3,
                 "Hyperbolic functions":5,"Integration":6,"Matrices":4 },
          FS:  { "Chi-squared tests":3,"Continuous random variables":3,
                 "Inference using normal and t-distributions":7,
                 "Non-parametric tests":4,"Probability generating functions":3 }
        }
      }
    }
  }
};
