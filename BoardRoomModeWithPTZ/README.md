### BoardRoom Mode With PTZ Macro

This is a variation on the primary/secondary codec macro that has been
optimized for specific **Board Room** configurations.

In some board room situations, the codec and speaker track camera are positioned
at one end of a long conference room table. While speaker tracking can accomodate
a wide range of rooms, rooms where the seat at _the head of the table_ is 
approaching 30 feet from the quad camera (or 20 feet from a RoomKit camera) 
present a challenge. At those distances, speaker tracking becomes unreliable,  
and custom room configuration is now needed. 

One way to deal with this type of configuration is by using an additional camera
(such as the Cisco P60 or Webex PTZ 4K) that can zoom in on the far end of the
table. Combined with table microphones that detect the location of the active  
speaker, the codec (using a macro) can select the camera (speaker track or   
PTZ) that best frames the active speaker for remote participants.
