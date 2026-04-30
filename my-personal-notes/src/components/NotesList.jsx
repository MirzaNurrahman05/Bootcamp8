import React from 'react';
import NoteItem from './NoteItem';

function NotesList({ notes, onDelete, onArchive, searchKeyword = '', dataTestId = 'notes-list' }) {
  // TODO [Basic] validasi notes agar tidak kosong.
  const hasNotes = notes.length > 0;

  if (!hasNotes) {
    return (
      <div className="notes-list" data-testid={dataTestId}>
        {/* TODO [Basic] tampilkan pesan kosong yang informatif ketika tidak ada catatan. */}
        <p
          className="notes-list__empty-message"
          data-testid={`${dataTestId}-empty`}
        >Tidak ada catatan</p>
      </div>
    );
  }

  // TODO [Advanced] kelompokkan catatan per bulan-tahun dan render tiap grup dalam <section className="notes-group">.
  const groupedNotes = notes.reduce((acc, note) => {
    const date = new Date(note.createdAt);
    const monthYear = date.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });
    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }
    acc[monthYear].push(note);
    return acc;
  }, {});

  return (
    <div className="notes-list notes-list--grouped" data-testid={dataTestId}>
      {Object.entries(groupedNotes).map(([monthYear, groupNotes]) => (
        <section className="notes-group" key={monthYear} data-testid="notes-group">
          <div className="notes-group__header">
            <h3 className="notes-group__title" data-testid="notes-group-title">{monthYear}</h3>
            <p className="notes-group__count">{groupNotes.length} catatan</p>
          </div>
          <div className="notes-group__items" data-testid="notes-group-items">
            {/* TODO [Basic] gunakan array.map untuk merender NoteItem untuk setiap catatan. */}
            {groupNotes.map((note) => (
              <NoteItem
                key={note.id}
                note={note}
                onDelete={onDelete}
                onArchive={onArchive}
                searchKeyword={searchKeyword}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default NotesList;
