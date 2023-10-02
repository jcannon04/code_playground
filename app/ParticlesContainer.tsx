import React, { Component } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFirePreset } from "tsparticles-preset-fire";

interface IProps {
  // Define your props interface if needed
}

class ParticlesContainer extends Component<IProps> {
  async customInit(engine: Engine): Promise<void> {
    // Load the "fire" preset for tsParticles
    await loadFirePreset(engine);
  }

  render() {
    const options = {
      preset: "fire", // Use the "fire" preset
      particles: {
        color: {
          value: "#FFFFFF" 
        },
        links: {
          color: "#FFFFFF" // Set the links (connections between particles) color to blue
        }
      },
      background: {
        image: "radial-gradient(circle, #0081A7 , #111827)", // Radial gradient with calming blue
      }
    };

    return <Particles options={options} init={this.customInit} />;
  }
}

export default ParticlesContainer;
