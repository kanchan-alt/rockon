# CSS Position

### Static Position:-
            1. Default page position are static

            2. An element will follow the normal document flow and will position itself based on the standard positioning rules.

            3.static positioned elements cannot have the z-index, top, left, right, or bottom properties applied to them.

            4. it follow the normal document flow but we can not  offset the properties(no effect)


### Relative Position:-     
            1. A relative position element works extactly the same as static position.

            2. it also follow the documentflow and we can use properties to change the postion of relative element(it relative to it original position)

            3. relative positioned elements can have the z-index, top, left, right, or bottom properties applied to them. 


### Absolute Position:- 
           1. The absolute position is the first position that completely removes the element from the normal document flow.

           2. all other elements will act as if the absolute positioned element doesn’t even exist.

           3. absoulte element  default width size is auto

           4. after position we apply proprties on element it rearch for parent container to be position either it relative, absolute , fixed or sticky.

           5. if no parent have any position  then it  see body as parent and then relative to that it change position of absoute element 

### Fixed Position:-   
           1.fixed position is a bit like absolute position in that it removes the element from the document flow.

           2. but fixed position elements are always positioned relative to the screen no matter what position its parent elements are.

           3. main different between fixed and absoulte is while scrolling the page  fixed element stay stuck  and absoulte it move


### Sticky Position:- 
            1.This position is a combination of both fixed and static position and combines the best of them both.

            2.An element with position sticky will act like a static positioned element until the page scrolls to a point where the element hits the top, left, right, or bottom value specified.

            3. It will then act like a fixed position element and scroll with the page until the element gets to the end of its container.


 ### Absolute/Fixed Position Advanced:-

            1. if parent container are static and have a properties like transform, filter or perspective. then it have two case raise.

              1.a  Absolute element relative to parent container even it position are static if the properties (transform, filter or perspective)are there in the the parent container   

              1.b  Fixed element relative to parent container even it position are static if the properties (transform, filter or perspective)are there in the the parent container  then it can not stay stuck it scroll the fixed element also 






                 


      