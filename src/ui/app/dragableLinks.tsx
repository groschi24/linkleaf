import cx from 'clsx';
import { ActionIcon, Group, rem, Text } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import {
  IconEye,
  IconGripVertical,
  IconPencil,
  IconTrash,
} from '@tabler/icons-react';
import classes from './DndListHandle.module.css';
import { useStore } from '@/lib/store/zustand';

export default function DragableLinks() {
  const { links } = useStore();
  const [state, handlers] = useListState(
    links.sort((a, b) => (a.position > b.position ? 1 : -1))
  );

  const items = state.map((item, index) => (
    <Draggable key={item.id} index={index} draggableId={item.id}>
      {(provided, snapshot) => (
        <div
          className={cx(
            classes.item,
            {
              [classes.itemDragging]: snapshot.isDragging,
            },
            !item.visible && classes.notVisible
          )}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div {...provided.dragHandleProps} className={classes.dragHandle}>
            <IconGripVertical
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </div>

          <Group justify='space-between' w='100%'>
            <div>
              <Text fw='bold' size='md'>
                {item.title}
              </Text>
              <Text size='sm' c='dimmed'>
                {item.url}
              </Text>
            </div>

            <Group>
              <ActionIcon variant='filled' aria-label='Visible'>
                <IconEye size={18} />
              </ActionIcon>
              <ActionIcon variant='filled' aria-label='Settings'>
                <IconTrash size={18} />
              </ActionIcon>
              <ActionIcon variant='filled' aria-label='Visible'>
                <IconPencil size={18} />
              </ActionIcon>
            </Group>
          </Group>
        </div>
      )}
    </Draggable>
  ));

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) =>
        handlers.reorder({ from: source.index, to: destination?.index || 0 })
      }
    >
      <Droppable droppableId='dnd-list' direction='vertical'>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <Group gap={0} mb='xs'>
              <Text c='dimmed' size='xs'>
                Drag
              </Text>
              <IconGripVertical color='#868e96' size={16} />
              <Text c='dimmed' size='xs'>
                to sort
              </Text>
            </Group>
            {items}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
