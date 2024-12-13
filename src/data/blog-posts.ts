import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 'opentx-lua-scripts',
    title: 'OpenTX Lua Scripts for FPV Protocols',
    excerpt: 'Custom Lua scripts for OpenTX radios to enhance FPV drone control and telemetry',
    date: '2024-03-20',
    content: `
# OpenTX Lua Scripts for FPV Protocols

![Drone Controller](https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=2000)

## Project Overview

This project focuses on developing custom Lua scripts for OpenTX radio controllers, specifically designed to enhance FPV (First Person View) drone flying experience. The scripts provide advanced telemetry visualization and custom protocol implementations.

## Key Features

### Telemetry Display
- Real-time battery voltage monitoring
- Signal strength indicators
- GPS coordinates and home distance
- Altitude and vertical speed

### Custom Protocol Implementation
\`\`\`lua
-- Example of custom protocol implementation
local function init_custom_protocol()
  local protocol = {
    id = "CUST",
    name = "Custom Protocol",
    init = function()
      -- Protocol initialization
    end,
    process = function(packet)
      -- Packet processing
    end
  }
  return protocol
end
\`\`\`

### Flight Modes
- Automated flight patterns
- Custom switch configurations
- Emergency return-to-home functions

## Technical Implementation

The scripts are written in Lua and integrate directly with OpenTX's telemetry system:

\`\`\`lua
local function process_telemetry()
  local voltage = getValue("VFAS")
  local altitude = getValue("Alt")
  local distance = getValue("Dist")
  
  -- Process telemetry data
  return {
    voltage = voltage,
    altitude = altitude,
    distance = distance
  }
end
\`\`\`

## Future Enhancements

- Integration with more FPV protocols
- Enhanced visualization options
- Custom sound alerts
- Automated flight logging`,
    tags: ['Lua', 'OpenTX', 'FPV', 'Drones', 'Telemetry']
  },
  {
    id: 'pico8-game-integration',
    title: 'PICO-8 Game Development and Web Integration',
    excerpt: 'Creating and integrating retro-style games using PICO-8 fantasy console',
    date: '2024-03-15',
    content: `
# PICO-8 Game Development and Web Integration

![Retro Gaming](https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000)

## Project Overview

This project explores game development using PICO-8, a fantasy console perfect for creating retro-style games. The project includes both game development and web integration aspects.

## Game Development

### Core Game Mechanics
\`\`\`lua
function _init()
  player = {
    x = 64,
    y = 64,
    sprite = 1
  }
end

function _update()
  if (btn(⬅️)) player.x -= 1
  if (btn(➡️)) player.x += 1
end

function _draw()
  cls()
  spr(player.sprite, player.x, player.y)
end
\`\`\`

### Web Integration

The game is embedded in a responsive web container:

\`\`\`html
<div class="pico8-container">
  <canvas class="pico8-canvas" width="128" height="128"></canvas>
</div>
\`\`\`

## Features

- Retro-style graphics and sound
- Responsive web integration
- Touch controls for mobile
- Save state management

## Technical Details

- Custom sprite design
- Sound effect creation
- Collision detection
- Performance optimization`,
    tags: ['PICO-8', 'Game Development', 'Lua', 'Web Integration', 'Retro Gaming']
  },
  {
    id: 'statial-mouse-3d',
    title: 'Statial Mouse: 3D Printed Ergonomic Mouse',
    excerpt: 'Custom 3D printed ergonomic mouse based on the Statial-b design',
    date: '2024-03-10',
    content: `
# Statial Mouse: 3D Printed Ergonomic Mouse

![3D Printed Mouse](https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=2000)

## Project Overview

A custom implementation of the Statial-b ergonomic mouse design, optimized for FDM 3D printing. This project focuses on creating a comfortable, customizable computer mouse with enhanced ergonomics.

## Design Features

### Ergonomic Considerations
- Vertical grip design
- Customizable thumb rest
- Adjustable button positions
- Palm support optimization

### Technical Specifications
- PMW3360 sensor
- Custom PCB design
- Kailh switches
- USB-C connectivity

## Manufacturing Process

### 3D Printing Parameters
\`\`\`gcode
; Example print settings
M104 S215 ; Set hotend temperature
M140 S60  ; Set bed temperature
M106 S255 ; Fan speed
G28       ; Home all axes
\`\`\`

### Assembly Guide
1. Print main shell (15% infill)
2. Install PCB and components
3. Wire switches and sensor
4. Attach grip panels

## Customization Options

- Different grip sizes
- Button layouts
- Sensor positions
- Cable routing options`,
    tags: ['3D Printing', 'Electronics', 'Hardware', 'DIY', 'Ergonomics']
  },
  {
    id: 'submarine-project',
    title: '3D Printed Submarine Project',
    excerpt: 'Building a functional 3D printed submarine with remote control capabilities',
    date: '2024-03-05',
    content: `
# 3D Printed Submarine Project

![Submarine](https://images.unsplash.com/photo-1621277224630-81a8e2f6e171?auto=format&fit=crop&q=80&w=2000)

## Project Overview

A custom-designed 3D printed submarine with remote control capabilities, based on the CPS Drone design. This project combines 3D printing, electronics, and waterproofing techniques.

## Technical Specifications

### Components
- Brushless motors
- Electronic speed controllers
- Depth sensors
- Camera system
- Radio control system

### Waterproofing
\`\`\`python
# Example depth calculation
def calculate_depth(pressure):
    water_density = 1000  # kg/m³
    gravity = 9.81       # m/s²
    depth = (pressure - atmospheric_pressure) / (water_density * gravity)
    return depth
\`\`\`

## Construction Process

1. 3D printing hull sections
2. Electronics assembly
3. Waterproofing implementation
4. Testing and calibration

## Features

- Remote control operation
- Live video feed
- Depth control
- Autonomous capabilities
- Data logging`,
    tags: ['3D Printing', 'Robotics', 'Electronics', 'Waterproofing', 'Remote Control']
  },
  {
    id: 'omnidirectional-robot',
    title: 'Omnidirectional Robot with Custom Wheels',
    excerpt: 'Design and implementation of an omnidirectional robot using custom-designed Mecanum wheels',
    date: '2024-02-28',
    content: `
# Omnidirectional Robot with Custom Wheels

![Robot](https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2000)

## Project Overview

Development of an omnidirectional robot platform using custom-designed Mecanum wheels. The project includes both mechanical design and control system implementation.

## Technical Design

### Wheel Design
\`\`\`python
# Mecanum wheel angle calculation
def calculate_roller_angle(num_rollers):
    return 45  # degrees
\`\`\`

### Movement Control
\`\`\`cpp
void calculateWheelSpeeds(float vx, float vy, float omega) {
    // Calculate individual wheel speeds
    float frontLeft = vx - vy - omega;
    float frontRight = vx + vy + omega;
    float rearLeft = vx + vy - omega;
    float rearRight = vx - vy + omega;
}
\`\`\`

## Features

- 360° movement capability
- Custom wheel design
- Precision control system
- Modular construction
- Remote operation

## Applications

- Industrial automation
- Research platforms
- Educational robotics
- Mobile manipulation`,
    tags: ['Robotics', '3D Printing', 'Mechatronics', 'Control Systems', 'Arduino']
  },
  {
    id: '3d-printed-art',
    title: '3D Printed Art: Dimensional Paintings',
    excerpt: 'Creating three-dimensional artwork using 3D printing technology',
    date: '2024-02-25',
    content: `
# 3D Printed Art: Dimensional Paintings

![3D Art](https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=2000)

## Project Overview

This project explores the intersection of traditional art and 3D printing technology, creating unique three-dimensional paintings and wall art.

## Technical Process

### Design Workflow
1. Digital artwork creation
2. 3D modeling and layering
3. Slicing and printing
4. Post-processing and finishing

### Printing Parameters
\`\`\`gcode
; Art print settings
M104 S200 ; Nozzle temperature
M140 S60  ; Bed temperature
G92 E0    ; Reset extruder
\`\`\`

## Artistic Elements

- Multiple layer depths
- Color transitions
- Texture variations
- Light interaction
- Shadow effects

## Technical Challenges

- Layer adhesion
- Support structures
- Color matching
- Surface finishing

## Applications

- Home decor
- Commercial installations
- Custom commissions
- Interactive displays`,
    tags: ['3D Printing', 'Art', 'Design', 'Manufacturing', 'Creative']
  }
];