const mapDBToModel = ({
    id,
    title,
    // genre,
    performer,
    // duration,
    // album_id,
}) => ({
    id,
    title,
    // genre,
    performer,
    // duration,
    // albumId: album_id,
});

module.exports = { mapDBToModel };