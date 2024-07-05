import React, { useEffect, useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ItemTypes = {
  CARD: "card",
};

const Section = ({ section, sections, setSections }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => {
      const { id: targetSectionId } = section;
      const { item: itemValue, sectionId: sourceSectionId } = monitor.getItem();

      // Make sure sections is properly initialized
      if (!sections || !Array.isArray(sections)) return;

      // If dropped in the same section, reorder items
      if (targetSectionId === sourceSectionId) {
        const updatedItems = [...section.items];
        const sourceIndex = updatedItems.indexOf(itemValue);
        updatedItems.splice(sourceIndex, 1); // Remove item from original position
        const hoverIndex = updatedItems.indexOf(itemValue);
        updatedItems.splice(hoverIndex, 0, itemValue); // Insert item into new position
        const updatedSections = sections.map((sec) => ({
          ...sec,
          items: sec.id === targetSectionId ? updatedItems : sec.items,
        }));
        setSections(updatedSections);
      } else {
        // If dropped in a different section, move item
        const updatedSections = sections.map((sec) => ({
          ...sec,
          items:
            sec.id === targetSectionId
              ? [...sec.items, itemValue]
              : sec.id === sourceSectionId
              ? sec.items.filter((i) => i !== itemValue)
              : [...sec.items],
        }));
        setSections(updatedSections);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={`section ${isOver ? "over" : ""}`}>
      <h2>{section.title}</h2>
      <ul>
        {section.items.map((item, index) => (
          <Item key={index} item={item} sectionId={section.id} />
        ))}
      </ul>
    </div>
  );
};

const Item = ({ item, sectionId }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: { type: ItemTypes.CARD, item, sectionId },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <li ref={drag} className={`item ${isDragging ? "dragging" : ""}`}>
      {item}
    </li>
  );
};

const App = () => {
  const data = localStorage.getItem("sections")
    ? JSON.parse(localStorage.getItem("sections"))
    : [
        {
          id: 1,
          title: "Request",
          items: [
            ["John Bieber", "Hi i want leave for 5 days"],
            "Item 2",
            "Item 3",
            "Item4",
            "Item5",
          ],
        },
        { id: 2, title: "Pending", items: [] },
        { id: 3, title: "Approved", items: [] },
        { id: 4, title: "Rejected", items: [] },
      ];
  const [sections, setSections] = useState(data);

  useEffect(() => {
    localStorage.setItem("sections", JSON.stringify(sections));
  }, [sections]);

  // Make sure sections is properly initialized
  if (!sections || !Array.isArray(sections)) return null;

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        {console.log(sections)}
        {sections.map((section) => (
          <Section
            key={section.id}
            section={section}
            sections={sections}
            setSections={setSections}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default App;
