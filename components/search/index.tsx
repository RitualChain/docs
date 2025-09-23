'use client';
import { useDocsSearch } from 'fumadocs-core/search/client';
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogFooter,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
  type SharedProps,
} from 'fumadocs-ui/components/dialog/search';
import { useI18n } from 'fumadocs-ui/contexts/i18n';
import { useState } from 'react';
import { TagsList, TagsListItem } from './search-dialogs';

export default function DefaultSearchDialog(props: SharedProps) {
  const { locale } = useI18n(); // (optional) for i18n
  const [tag, setTag] = useState<string | undefined>("");
  const { search, setSearch, query } = useDocsSearch({
    type: 'fetch',
    locale,
    tag,
  });

  return (
    <SearchDialog
      search={search}
      onSearchChange={setSearch}
      isLoading={query.isLoading}
      {...props}
    >
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        {query.data !== 'empty' && query.data && (
          <SearchDialogList items={query.data} />
        )}
        <SearchDialogFooter className="flex flex-row">
          <TagsList 
          tag={tag} 
          onTagChange={(tag) => setTag(tag)}
          >
            <TagsListItem value={''}>All</TagsListItem>
            <TagsListItem value="overview">Overview</TagsListItem>
            <TagsListItem value="landscape">Landscape</TagsListItem>
            <TagsListItem value="new">What's New</TagsListItem>
            <TagsListItem value="using">Using Ritual</TagsListItem>
            <TagsListItem value="building">Build on Ritual</TagsListItem>
            <TagsListItem value="architecture">Architecture</TagsListItem>
            <TagsListItem value="beyond">Beyond Crypto x AI</TagsListItem>
            <TagsListItem value="roadmap">Roadmap</TagsListItem>
            <TagsListItem value="reference">Reference</TagsListItem>
          </TagsList>
        </SearchDialogFooter>
      </SearchDialogContent>
      <SearchDialogFooter>
        <SearchDialogClose />
      </SearchDialogFooter>
    </SearchDialog>
  );
}