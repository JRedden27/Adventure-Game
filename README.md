# Haunt and Gather

[https://www.hauntandgather.com/](https://www.hauntandgather.com/)

___________________________________________________

## Required Statement
A browser-based game emulating the style of classic point & click adventure games, created using Phaser 3 and hosted using AWS Amplify. All art, permanent or temporary, is being created by me. Sounds so far are sourced from the Freesound library. Players will be able to explore a haunted mansion and the surrounding grounds. Players will also be able to talk to various characters found therein, pick up items, and examine or interact with notable parts of their surroundings.

___________________________________________________

### RS01: *"A browser-based game emulating the style of classic point & click adventure games, created using Phaser 3 and hosted using AWS Amplify."*

#### Functional Requirements
* **F01:** Allow user to play on their browser.
* **F02:** Allow point & click interactivity.

#### Informational Components
* **I01:** Browser type
* **I02:** User’s OS
* **I03:** Cursor location
* **I04:** Selected element
* **I05:** Type of interaction

#### Non-Functional Requirements

##### Performance Based
* **P01:** User should be able to load game within 15 seconds and see progress.
* **P02:** Seamless response time (for Point & click interactions).
* **P03:** Game should be optimized for as many browser types and OS’s as possible.
* **P04:** Game should be optimized for mobile proportions.

##### Constraints
* **C01:** Brower type
* **C02:** Browser version (support)
* **C03:** User’s device type
* ***C04:*** User’s device proportions

___________________________________________________

### RS02: *“All art, permanent or temporary, is being created by me. Sounds so far are sourced from the Freesound library. Players will be able to explore a haunted mansion and the surrounding grounds.”*
 
#### Functional Requirements
* **F03:** Display loading screen
* **F04:** Display main screen
* **F05:** Display backgrounds for each area
* **F06:** Allow moving between areas
* **F07:** Play background music
* **F08:** Allow toggling of music
* **F09:** Play sound effects
* **F10:** Allow toggling of sound effects

#### Informational Components
* **I05:** Type of interaction (move)
* **I06:** Image asset
* **I07:** Audio asset
* **I08:** Music On/Off status
* **I09:** SFX On/Off status

#### Non-Functional Requirements

##### Performance Based
* **P02:** Seamless response time (for moving between scenes).
* **P04:** Game should be optimized for mobile proportions (backgrounds).
* **P05:** Sounds should play at a comfortable level by default.

##### Constraints
* **C01:** Brower type
* **C02:** Browser version (support)
* **C03:** User’s device type
* **C04:** User’s device proportions
* **C05:** User’s volume levels

___________________________________________________

### RS03: *“Players will also be able to talk to various characters found therein, pick up items, and examine or interact with notable parts of their surroundings.”*

#### Functional Requirements
* **F02:** Allow point & click interactivity.
* **F11:** Allow talking to characters
* **F12:** Progress dialogue with each click
* **F13:** Dialogue should change based on game progress/ completed tasks.
* **F14:** Allow user to examine various elements
* **F15:** Allow some items to be picked up
* **F16:** Remove item image once picked up
* **F17:** Display inventory
* **F18:** Allow items to be used on other items / elements

#### Informational Components
* **I03:** Cursor location
* **I04:** Selected element
* **I05:** Type of interaction (inspect, talk, pick up, use item on)
* **I06:** Image asset
* **I10:** Object ID
* **I11:** Game progress (may affect dialogue)
* **I12:** Inventory contents

#### Non-Functional Requirements

##### Performance Based
* **P02:** Seamless response time (for interactions with characters, items, scenery).
* **P04:** Game should be optimized for mobile proportions (all image assets).

##### Constraints
* **C01:** Brower type
* **C02:** Browser version (support)
* **C03:** User’s device type
* **C04:** User’s device proportions



___________________________________________________



## Index

#### Required Statements
* **RS01:** A browser-based game emulating the style of classic point & click adventure games, created using Phaser 3 and hosted using AWS Amplify.
* **RS02:** All art, permanent or temporary, is being created by me. Sounds so far are sourced from the Freesound library. Players will be able to explore a haunted mansion and the surrounding grounds.
* **RS03:** Players will also be able to talk to various characters found therein, pick up items, and examine or interact with notable parts of their surroundings.

#### Functional Requirements
* **F01:** Allow user to play on their browser.
* **F02:** Allow point & click interactivity.
* **F03:** Display loading screen
* **F04:** Display main screen
* **F05:** Display backgrounds for each area
* **F06:** Allow moving between areas
* **F07:** Play background music
* **F08:** Allow toggling of music
* **F09:** Play sound effects
* **F10:** Allow toggling of sound effects
* **F11:** Allow talking to characters
* **F12:** Progress dialogue with each click
* **F13:** Dialogue should change based on game progress/ completed tasks.
* **F14:** Allow user to examine various elements
* **F15:** Allow some items to be picked up
* **F16:** Remove item image once picked up
* **F17:** Display inventory
* **F18:** Allow items to be used on other items / elements

#### Informational Components
* **I01:** Browser type
* **I02:** User’s OS
* **I03:** Cursor location
* **I04:** Selected element
* **I05:** Type of interaction
* **I06:** Image asset
* **I07:** Audio asset
* **I08:** Music On/Off status
* **I09:** SFX On/Off status
* **I10:** Object ID
* **I11:** Game progress (may affect dialogue)
* **I12:** Inventory contents

#### Non-Functional Requirements

##### Performance Based
* **P01:** User should be able to load game within 15 seconds and see progress.
* **P02:** Seamless response time.
* **P03:** Game should be optimized for as many browser types and OS’s as possible.
* **P04:** Game should be optimized for mobile proportions.
* **P05:** Sounds should play at a comfortable level by default.

##### Constraints
* **C01:** Brower type
* **C02:** Browser version (support)
* **C03:** User’s device type
* **C04:** User’s device proportions
* **C05:** User’s volume levels
